import * as types from '../constants'

export function setUrl(category) {
  if (category === 'mostPopular') {
   return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&maxResults=9&chart=${category}&key=${types.API_KEY}`
  }
  else {
    return `${types.BASE_URL}videos?part=statistics,snippet,contentDetails&chart=mostPopular&maxResults=9&videoCategoryId=${category}&key=${types.API_KEY}`
  }
}

export function setSearchUrl(query) {
 return `${types.BASE_URL}search?part=snippet,id&type=video&maxResults=12&q=${query}&key=${types.API_KEY}`
}
