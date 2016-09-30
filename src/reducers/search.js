import { SET_SEARCH } from '../actions'

const search = (state = {query: '', isActive: false}, action) => {
  switch (action.type) {
    case SET_SEARCH:
      let active = true
      if (action.search === null || action.search === '')
        active = false
      return {
        ...state,
        query: action.search,
        isActive: active
      }
    default:
      return state
  }
}
export default search
