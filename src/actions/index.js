export const ADD_ITEM = 'ADD_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'
export const DELETE_ALL = 'DELETE_ALL'
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE'

let currentIndex = 0

export function addItem() {
  return {
    type: ADD_ITEM,
    id: currentIndex++
  }
}

export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}

export function deleteAll() {
  return {
    type: DELETE_ALL
  }
}

export function setFilterValue(filterValue) {
  return {
    type: SET_FILTER_VALUE,
    filterValue
  }
}
