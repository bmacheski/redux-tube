import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'

class WatchVideoNav extends Component {
  render() {
    const { video } = this.props

    return (
      <LeftNav>
        <h1>{video.snippet.title}</h1>
        <h3>Views: {video.statistics.viewCount}</h3>
      </LeftNav>
    )
  }
}

WatchVideoNav.PropTypes = {
  video: PropTypes.object.isRequired
}

export default WatchVideoNav
