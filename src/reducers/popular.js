import * as types from '../constants'

const initialTrendingState = {
  isFetching: false,
  items: []
}

function video(state = initialTrendingState, action) {
  switch (action.type) {
    case types.REQUEST_MOST_POPULAR:
      return Object.assign({}, state, {
        isFetching: true
      })
    case types.RECEIVE_MOST_POPULAR:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.videos
      })
    default:
      return state
  }
}

export default function videos(state = {}, action) {
  switch (action.type) {
    case types.REQUEST_MOST_POPULAR:
      return Object.assign({}, state, {
        trending: video(state[action.videos], action)
      });
    case types.RECEIVE_MOST_POPULAR:
      return Object.assign({}, state, {
        trending: video(state[action.videos], action)
      })
    default:
      return state
  }
}
