import thunkMiddleware from 'redux-thunk'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import createHistory from 'history/lib/createBrowserHistory'
import routes from '../../routes'
import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter } from 'redux-router'

const createFinalStore = compose(
  applyMiddleware(thunkMiddleware),
  reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState) {
  const store = createFinalStore(rootReducer, initialState)
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
