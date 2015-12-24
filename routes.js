import React from 'react'
import App from './src/containers/App'
import VideosContainer from './src/containers/VideosContainer'
import VideoContainer from './src/containers/VideoContainer'
import { Route } from 'react-router'

export default (
  <Route component={App}>
      <Route path="/"
        component={VideosContainer}/>
      <Route path="video/:id"
        component={VideoContainer}/>
  </Route>
)
