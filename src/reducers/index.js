import { combineReducers } from 'redux'
import { REQUEST_CHANNELS, RECEIVE_CHANNELS } from '../actions'
import fromSliders from './sliders'

function channels(state = {
  isFetching: false,
  items: []
}, action) {
  switch (action.type) {
    default:
      return state
  }
}

function byId(state = {items: []}, action) {
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
        items: action.channels.slice(0, 10),
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

const rootReducer = combineReducers({
  sliders: fromSliders,
  channels: byId,
})

export default rootReducer


