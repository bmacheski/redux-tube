import * as types from '../constants'
import fetch from 'isomorphic-fetch'
import { videoSchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'

function requestTrending(category) {
  return {
    type: types.REQUEST_TRENDING,
    category: category
  }
}

function receiveTrending(entities, trending, category) {

  return {
    type: types.RECEIVE_TRENDING,
    entities,
    trending,
    category
  }
}

export function fetchTopTrending() {
  let category = 'mostPopular'
  let topTrendingUrl = `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&maxResults=9&chart=${category}&key=${types.API_KEY}`

  return dispatch => {
    dispatch(requestTrending(category))
    return fetch(topTrendingUrl)
      .then(response => response.json())
      .then(json => {
        const normVideos = normalize(json.items, arrayOf(videoSchema))
        const trendingArr = normVideos.result
        dispatch(receiveTrending(normVideos.entities, trendingArr, category))
      })
  }
}
