import { SET_SEARCH } from '../actions'

const search = (state = '', action) => {
  switch (action.type) {
    case SET_SEARCH:
      return action.search
    default:
      return state
  }
}
export default search
