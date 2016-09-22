import { combineReducers } from 'redux'
import { REQUEST_CHANNELS, RECEIVE_CHANNELS } from '../actions'
import striptags  from 'striptags'

function channels(state = {}, action) {
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
          obj[channel._id] = channels(channel, action)
          return obj
        }, {})
      }
    default:
      const { _id } = action
      if (_id) {
        return {
          ...state,
          [_id]: channels(state[_id], action)
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
            categories[name].push(channels(channel, action))
          } else {
            categories[name] = [channels(channel, action)]
          }
        })
      })
      return categories
    default:
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels.map(channel => channel._id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
  byCategory
})

export const getChannel = (state, id) =>
  state.byId[id]

export const getVisibleChannels = state =>
  state.visibleIds.map(id => getChannel(state, id))
