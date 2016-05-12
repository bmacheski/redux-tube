import * as types from '../constants'
import { videoSchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'
import { setSearchUrl } from '../utils/url'

function requestSearchResults(category) {

  return {
    type: types.REQUEST_SEARCH,
    category
  }
}

function receiveSearchResults(entities, searchItems, category) {

  return {
    type: types.RECEIVE_SEARCH,
    entities,
    searchItems,
    category
  }
}

function fetchSearchResults(query) {
  const searchUrl = setSearchUrl(query)

  return dispatch => {
    dispatch(requestSearchResults(query))
    return fetch(searchUrl)
      .then(response => response.json())
      .then(json => {
        const items = json.items.map(item => {
          return {
            snippet: item.snippet,
            id: item.id.videoId
          }
        })
        const normSearchResults = normalize(items, arrayOf(videoSchema))
        const searchArr = normSearchResults.result

        dispatch(receiveSearchResults(normSearchResults.entities, searchArr, query))
      })
  }
}

export default {
  fetchSearchResults
}
