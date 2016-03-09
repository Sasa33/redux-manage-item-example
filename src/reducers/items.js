import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from '../actions/index'

const initState = []

// const initState = [{
//   id: 0,
//   text: 1
// },
// {
//   id: 1,
//   text: 2
// }]

const items = (state = initState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        {
          id: action.id,
          text: action.id + 1,
          visibility: true
        }
      ]
    case DELETE_ITEM:
      return state.filter(item => {
        return item.id !== action.id
      })
    case DELETE_ALL:
      return []
    default:
      return state
  }
}

export default items
