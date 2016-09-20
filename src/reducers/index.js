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
        isFetching: false,
        items: action.posts,
      }
    default:
      const { uniqueId } = action
      if (uniqueId) {
        return {
          ...state,
          [uniqueId]: channels(state[uniqueId], action)
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


