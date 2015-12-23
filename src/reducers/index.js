import { combineReducers } from 'redux'
import videos from './popular'
import trendingCategories from './categories'
import navigator from './navigator'

const rootReducer = combineReducers({
  videos,
  trendingCategories,
  navigator
})

export default rootReducer
