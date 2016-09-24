import { combineReducers } from 'redux'
import { REQUEST_CHANNELS, RECEIVE_CHANNELS, SEARCH_CHANNELS } from '../actions'
import striptags  from 'striptags'

function channel(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return {
        ...state,
        description: striptags(state.description).replace(/&nbsp;/g, '')
      }
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case REQUEST_CHANNELS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CHANNELS:
      return {
        ...state,
        ...action.channels.reduce((obj, channel) => {
          obj[channel._id] = channel(channel, action)
          return obj
        }, {})
      }
    default:
      const { _id } = action
      if (_id) {
        return {
          ...state,
          [_id]: channel(state[_id], action)
        }
      }
      return state
  }
}

function byCategory(state = {}, action) {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      let categories = {}
      action.channels.forEach((channel, index, array) =>{
        channel.categoryNames.forEach((name) =>{
          if(categories[name]) {
            categories[name].push(channel(channel, action))
          } else {
            categories[name] = [channel(channel, action)]
          }
        })
      })
      return categories
    default:
      return state
  }
}

const visibleChannels = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels.map(channel => channel)
    case SEARCH_CHANNELS:
      return action.channels.filter(channel => {return  channel.title.includes(action.search)})
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleChannels,
  byCategory
})

export const getChannel = (state, id) =>
  state.byId[id]

export const getVisibleChannels = state =>
  state.visibleIds.map(id => getChannel(state, id))
