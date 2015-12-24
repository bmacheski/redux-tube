import 'babel-core/polyfill'
import './src/styles.css'

import React from 'react'
import App from './src/containers/App'
import configureStore from './src/store/configureStore'
import VideosContainer from './src/containers/VideosContainer'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { Router, Route, IndexRoute } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'

const store = configureStore()
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={VideosContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
