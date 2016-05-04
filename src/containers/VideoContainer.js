import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import WatchVideo from '../components/WatchVideo'
import WatchVideoNav from '../components/WatchVideoNav'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'

class VideoContainer extends Component {
  render() {
    const { videoId, videos, pushState } = this.props
    const video = videos[videoId]

    return (
      <div>
        <WatchVideoNav
          pushState={pushState}
          video={video}
        />
        <WatchVideo id={videoId} />
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

function mapDispatchToProps(dispatch) {
  return {
    pushState: bindActionCreators(pushState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoContainer)
