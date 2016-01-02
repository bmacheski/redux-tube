import React from 'react'
import App from './src/containers/App'
import VideosContainer from './src/containers/VideosContainer'
import VideoContainer from './src/containers/VideoContainer'
import SearchContainer from './src/containers/SearchContainer'
import { Route } from 'react-router'

export default (
  <Route component={App}>
    <Route path="/"
      component={VideosContainer}/>
    <Route path="/videos/:category"
      component={VideosContainer}/>
    <Route path="video/:videoId"
      component={VideoContainer}/>
    <Route path="search/:query"
      component={SearchContainer}/>
  </Route>
)
