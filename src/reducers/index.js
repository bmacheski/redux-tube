import videos from './popular'
import trendingCategories from './categories'
import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'

const rootReducer = combineReducers({
  videos,
  trendingCategories,
  router
})

export default rootReducer
