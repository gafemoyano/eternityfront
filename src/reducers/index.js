import { combineReducers } from 'redux'
import fromChannels from './channels'
import { SET_LOCATION } from '../actions'
import { routerReducer as routing } from 'react-router-redux'

const app = (state = {location: {pathname: '/'}}, action) =>{
  switch (action.type) {
    case SET_LOCATION:
      return {
        ...state,
        location: action.location
      }
    default:
      return state
  }
}


const rootReducer = combineReducers({
  app,
  channels: fromChannels,
  routing,
})

export default rootReducer


