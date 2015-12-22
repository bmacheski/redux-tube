import { combineReducers }  from 'redux'
import videos               from './popular'
import navigator            from './navigator'

const rootReducer = combineReducers({
  videos,
  navigator
})

export default rootReducer
