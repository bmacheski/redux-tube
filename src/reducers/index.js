import trendingVideos from './trending'
import entities from './entities'
import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'

const rootReducer = combineReducers({
  trendingVideos,
  entities,
  router
})

export default rootReducer
