import * as types from '../constants'
import { categorySchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'

function receiveCategories(entities) {

  return {
    type: types.RECEIVE_CATEGORIES,
    entities
  }
}

function fetchCategories() {
  let categoriesUrl = `${types.BASE_URL}videoCategories?part=snippet&regionCode=US&key=${types.API_KEY}`

  return dispatch => {
    return fetch(categoriesUrl)
      .then(response => response.json())
      .then(json => {
        const normCategories = normalize(json.items, arrayOf(categorySchema))

        dispatch(receiveCategories(normCategories.entities))
      })
  }
}

export default {
  fetchCategories
}
