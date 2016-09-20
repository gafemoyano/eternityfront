import { combineReducers } from 'redux'
import { REQUEST_CHANNELS, RECEIVE_CHANNELS } from '../actions/channels'

function channels(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_CHANNELS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CHANNELS:
      return {
        ...state,
        isFetching: false,
        items: action.channels,
      }
    default:
      return state
  }
}

function visibleIds(state = [], action) {
  switch (action.type) {
    case RECEIVE_CHANNELS:
      return action.channels.map(channel => channel.id)
    default:
      return state
  }
}

export default combineReducers({
  visibleIds
})

export function getProduct(state, id) {
  return state.byId[id]
}

export function getVisibleChannels(state) {
  return state.visibleIds.map(id => getProduct(state, id))
}
