import { SET_FILTER_VALUE } from '../actions/index'

let initState = ''

const filter = (state = initState, action) => {
  switch (action.type) {
    case SET_FILTER_VALUE:
      return action.filterValue
    default:
      return state
  }
}

export default filter
