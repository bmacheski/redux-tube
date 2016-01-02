import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import WatchVideo from '../components/WatchVideo'
import TextField from 'material-ui/lib/text-field'
import MenuItem from 'material-ui/lib/menus/menu-item'
import WatchVideoNav from '../components/WatchVideoNav'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'

class VideoContainer extends Component {
  render() {
    const { videoId, videos } = this.props
    const { pushState } = this.props.actions
    const video = videos[videoId]

    return (
      <div>
        <WatchVideoNav
          pushState={pushState}
          video={video} />
        <WatchVideo
          id={videoId} />
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

const mapDispatchToProps = (dispatch) => ({
  actions: {
    pushState: bindActionCreators(pushState, dispatch)
  }
})



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoContainer)
