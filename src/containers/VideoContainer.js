import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import WatchVideo from '../components/WatchVideo'
import TextField from 'material-ui/lib/text-field'

class VideoContainer extends Component {
  render() {
    const { videoId } = this.props

    let header = (
      <TextField hintText="Search YouTube." />
    )
    return (
      <div>
        <LeftNav
          ref="leftNav"
          className="nav" />
        <main>
            <WatchVideo id={videoId} />
        </main>
      </div>
    )
  }
}

VideoContainer.propTypes = {
  videoId: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  const videoId  = state.router.params.videoId

  return {
    videoId
  }
}

export default connect(mapStateToProps)(VideoContainer)
