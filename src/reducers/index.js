import videos from './videos'
import entities from './entities'
import { combineReducers } from 'redux'
import { routerStateReducer as router } from 'redux-router'

const rootReducer = combineReducers({
  videos,
  entities,
  router
})

export default rootReducer
