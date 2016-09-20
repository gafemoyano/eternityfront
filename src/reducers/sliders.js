import { REQUEST_CHANNELS, RECEIVE_CHANNELS } from '../actions'
import * as actions from '../actions/sliders'

const MIN_ITEM_WIDTH = 160
const MIN_VISIBLE_COLUMNS = 2

const item = (state={isActive: false}, action ) => {
  switch(action.type) {
    case actions.ACTIVATE_ITEM:
      if (state._id !== action._id) {
        return state
      }
      return {
        ...state,
        isActive: true,
      }
    case actions.DEACTIVATE_ITEMS:
      return {
        ...state,
        isActive: false,
      }
    default:
      return state
  }
}

const slider = (state = {
  items: [],
  activeItemIdx: null,
  visibleColumns: MIN_VISIBLE_COLUMNS,
  itemWidth: MIN_ITEM_WIDTH,
  sliderWidth: 0,
  isFetching: false,
 }, action ) => {
  let items = []
  switch(action.type) {
    case actions.ACTIVATE_ITEM:
      items = state.items.map(c =>
        item(c, action)
      )
      return {
        ...state,
        items,
        activeItemIdx: action.index,
      }
    case actions.DEACTIVATE_ITEMS:
      items = state.items.map(c =>
        item(c, action)
      )
      return {
        ...state,
        items,
        activeItemIdx: null,
      }
    case actions.UPDATE_VISIBLE_COLUMNS:
      return {
        ...state,
        visibleColumns: parseInt(state.sliderWidth / state.itemWidth, 10)
      }
    case REQUEST_CHANNELS:
      return {
        ...state,
        isFetching: true,
      }
    case RECEIVE_CHANNELS:
      return {
        ...state,
        isFetching: false,
        items: action.channels.slice(0,10)
      }
    default:
      return state
  }
}



export default slider
