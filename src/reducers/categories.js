import * as types from '../constants'

const initialCategoryState = {}

function category(state = initialCategoryState, action) {
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
      return Object.assign({}, state)
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categoryItems: action.categories
      })
    default:
      return state
  }
}

export default function categories(state = initialCategoryState, action) {
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        categories: category(state[action.categories], action)
      });
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categories: category(state[action.categories], action)
      })
    default:
      return state
  }
}
