import React, { Component, PropTypes } from 'react'
import YouTube from 'react-youtube'

class WatchVideo extends Component {
  render() {
    const { id } = this.props
    const opts = {
      height: '620',
      width: '960'
    }

    return (
      <div>
        <YouTube
          videoId={id}
          opts={opts} />
      </div>
    )
  }
}

WatchVideo.PropTypes = {
  id: PropTypes.number.isRequired
}

export default WatchVideo
