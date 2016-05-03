import * as types from '../constants'
import { categorySchema } from '../constants/Schema'
import { normalize, arrayOf } from 'normalizr'
import { setCategoryUrl } from '../utils/url'

function receiveCategories(entities) {
  return {
    type: types.RECEIVE_CATEGORIES,
    entities
  }
}

function fetchCategories() {
  const categoriesUrl = setCategoryUrl()

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
