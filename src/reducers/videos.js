import * as types from '../constants'

const initialTrendingState = {
  isFetching: false,
  items: []
}

function video(state = initialTrendingState, action) {
  switch (action.type) {
    case types.REQUEST_TRENDING:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_TRENDING:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.trending]
      })
    case types.REQUEST_SEARCH:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        items: [...state.items, ...action.searchItems]
      })
    default:
      return state
  }
}

export default function videos(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_TRENDING:
      return Object.assign({}, state, {
        [action.category]: video(state[action.category], action)
      })
    case types.RECEIVE_TRENDING:
      return Object.assign({}, state, {
        [action.category]: video(state[action.category], action)
      })
    case types.REQUEST_SEARCH:
      return Object.assign({}, state, {
        [action.category]: video(state[action.category], action)
      })
    case types.RECEIVE_SEARCH:
      return Object.assign({}, state, {
        [action.category]: video(state[action.category], action)
      })
    case types.RECEIVE_CATEGORIES:
      return Object.assign({}, state)
    default:
      return state
  }
}
