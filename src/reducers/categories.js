import * as types from '../constants'

function category(state = {}, action) {
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

export default function categories(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_CATEGORIES:
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state, {
        categories: category(state[action.categories], action)
      })
    
    default:
      return state
  }
}