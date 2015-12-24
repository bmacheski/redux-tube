import { combineReducers } from 'redux'
import videos from './popular'
import trendingCategories from './categories'
import { routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  videos,
  trendingCategories,
  routing: routeReducer
})

export default rootReducer
