import * as types from '../constants'
import fetch from 'isomorphic-fetch'
import { videoSchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'
import { setUrl, setNextUrl } from '../utils/url'

function requestTrending(category) {
  return {
    type: types.REQUEST_TRENDING,
    category: category
  }
}

function receiveTrending(entities, trending, category, nextUrl) {
  return {
    type: types.RECEIVE_TRENDING,
    entities,
    trending,
    category,
    nextUrl
  }
}

function fetchTopTrending(category, url) {
  return dispatch => {
    dispatch(requestTrending(category))
    return fetch(url)
      .then(response => response.json())
      .then(json => {
        const nextUrl = json.nextPageToken
        const normVideos = normalize(json.items, arrayOf(videoSchema))
        const trendingArr = normVideos.result

        dispatch(receiveTrending(normVideos.entities, trendingArr, category, nextUrl))
      })
  }
}

function fetchTopTrendingIfNeeded(category) {
  return (dispatch, getState) => {
    const { videos } = getState()

    if (shouldFetchTopTrending(videos, category)) {
      const nextUrl = constructNextUrl(videos, category)

      return dispatch(fetchTopTrending(category, nextUrl))
    }
  }
}

function constructNextUrl(videos, category) {
    const categoryVideos = videos[category]

    if (!categoryVideos || categoryVideos.nextUrl === false) {
      return setUrl(category)
    }
    return setNextUrl(category, categoryVideos.nextUrl)
}

function shouldFetchTopTrending(videos, category) {
  const selectedCategory = videos[category]

  if (!selectedCategory || selectedCategory.nextUrl !== null) {
    return true
  }
  return false
}

export default {
  fetchTopTrendingIfNeeded
}
