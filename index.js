import 'babel-core/polyfill'
import './src/styles.css'

import React from 'react'
import Root from './src/containers/Root'
import configureStore from './src/store/configureStore'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
