import trendingVideos from './trending'
import entities from './entities'
// import trendingCategories from './categories'
import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'

const rootReducer = combineReducers({
  trendingVideos,
  entities,
  router
})

export default rootReducer
