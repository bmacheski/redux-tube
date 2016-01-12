import * as types from '../constants'

const view_count = '12'

export function setUrl(category) {
  if (category === 'mostPopular') {
   return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&maxResults=${view_count}&chart=${category}&key=${types.API_KEY}`
  }
  else {
    return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&chart=mostPopular&maxResults=${view_count}&videoCategoryId=${category}&key=${types.API_KEY}`
  }
}

export function setNextUrl(category, pageToken) {
  if (category === 'mostPopular') {
   return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&maxResults=${view_count}&chart=${category}&key=${types.API_KEY}&pageToken=${pageToken}`
  }
  else {
    return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&chart=mostPopular&maxResults=${view_count}&videoCategoryId=${category}&key=${types.API_KEY}&pageToken=${pageToken}`
  }
}

export function setSearchUrl(query) {
 return `${types.BASE_URL}search?part=snippet,id&type=video&maxResults=${view_count}&q=${query}&key=${types.API_KEY}`
}
