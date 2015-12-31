import * as types from '../constants'
import fetch from 'isomorphic-fetch'
import { videoSchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'
import { setUrl } from '../utils/url'

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

function fetchTopTrending(categ) {
  let category = categ || 'mostPopular'
  let url = setUrl(category)

  return dispatch => {
    dispatch(requestTrending(category))
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const normVideos = normalize(json.items, arrayOf(videoSchema))
        const trendingArr = normVideos.result
        dispatch(receiveTrending(normVideos.entities, trendingArr, category))
      })
  }
}

export default {
  fetchTopTrending
}
