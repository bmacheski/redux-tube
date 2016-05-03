import * as types from '../constants'

const view_count = '12'
const snippet = 'videos?part=statistics,snippet,contentDetails&'

export function setUrl(category) {
  return category === 'mostPopular'
  ? `${types.BASE_URL}${snippet}maxResults=${view_count}&chart=${category}&key=${types.API_KEY}`
  : `${types.BASE_URL}${snippet}chart=mostPopular&maxResults=${view_count}&videoCategoryId=${category}&key=${types.API_KEY}`
}

export function setNextUrl(category, pageToken) {
  return category === 'mostPopular'
  ? `${types.BASE_URL}${snippet}&maxResults=${view_count}&chart=${category}&key=${types.API_KEY}&pageToken=${pageToken}`
  : `${types.BASE_URL}${snippet}chart=mostPopular&maxResults=${view_count}&videoCategoryId=${category}&key=${types.API_KEY}&pageToken=${pageToken}`
}

export function setSearchUrl(query) {
	return `${types.BASE_URL}search?part=snippet,id&type=video&maxResults=${view_count}&q=${query}&key=${types.API_KEY}`
}

export function setCategoryUrl() {
	return `${types.BASE_URL}videoCategories?part=snippet&regionCode=US&key=${types.API_KEY}`
}
