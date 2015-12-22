import * as types from '../constants'
import fetch      from 'isomorphic-fetch'

function requestMostPopular() {
  return {
    type: types.REQUEST_MOST_POPULAR
  }
}

function receiveMostPopular(json) {
  return {
    type: types.RECEIVE_MOST_POPULAR,
    videos: json.items.map(child => child)
  }
}

export function fetchMostPopular() {
  let mostPopularUrl = `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&chart=mostPopular&key=${types.API_KEY}`
  return dispatch => {
    dispatch(requestMostPopular())
    return fetch(mostPopularUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveMostPopular(json)))
  }
}
