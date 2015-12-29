import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import WatchVideo from '../components/WatchVideo'
import TextField from 'material-ui/lib/text-field'
import MenuItem from 'material-ui/lib/menus/menu-item'

class VideoContainer extends Component {
  render() {
    const { videoId, videos } = this.props
    const video = videos[videoId]
    console.log(video)
    return (
      <div>
        <LeftNav>
          <h1>{video.snippet.title}</h1>
          <h3>Views: {video.statistics.viewCount}</h3>
        </LeftNav>
        <main>
            <WatchVideo id={videoId} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { entities } = state
  const videoId = state.router.params.videoId


  return {
    videos: entities.videos,
    videoId
  }
}

export default connect(mapStateToProps)(VideoContainer)
