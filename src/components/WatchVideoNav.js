import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import Nav from './Nav'

class WatchVideoNav extends Component {

  render() {
    const { video, pushState } = this.props
    const items = <h1>{video.snippet.title}</h1>

    return (
      <Nav
        pushState={pushState}
        items={items}
      />
    )
  }
}

WatchVideoNav.PropTypes = {
  video: PropTypes.object.isRequired
}

export default WatchVideoNav
