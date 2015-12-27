function requestCategories() {
  return {
    type: types.REQUEST_CATEGORIES
  }
}

function receiveCategories(json) {
  return {
    type: types.RECEIVE_CATEGORIES,
    categories: json.items.map(child => child)
  }
}

export function fetchCategories() {
  let categoriesUrl = `${types.BASE_URL}videoCategories?part=snippet&regionCode=US&key=${types.API_KEY}`
  return dispatch => {
    dispatch(requestCategories())
    return fetch(categoriesUrl)
      .then(response => response.json())
      .then(json => dispatch(receiveCategories(json)))
  }
}
