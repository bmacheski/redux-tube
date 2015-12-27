import * as types from '../constants'

const initialTrendingState = {
  isFetching: false,
  items: []
}

function trendingVideo(state = initialTrendingState, action) {
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
    default:
      return state
  }
}

export default function trendingVideos(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_TRENDING:
      return Object.assign({}, state, {
        [action.category]: trendingVideo(state[action.category], action)
      })
    case types.RECEIVE_TRENDING:
      return Object.assign({}, state, {
        [action.category]: trendingVideo(state[action.category], action)
      })
    default:
      return state
  }
}
