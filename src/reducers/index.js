import { combineReducers } from 'redux'
import fromChannels from './channels'


const rootReducer = combineReducers({
  channels: fromChannels,
})

export default rootReducer


