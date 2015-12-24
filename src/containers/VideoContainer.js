import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import WatchVideo from '../components/WatchVideo'
import TextField from 'material-ui/lib/text-field'

class VideoContainer extends Component {
  render() {
    const { items } = this.props

    let header = (
      <TextField hintText="Search YouTube." />
    )

    return (
      <div>
        <LeftNav
          ref="leftNav"
          header={header}
          className="nav" />
        <main>
            <WatchVideo />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { videos } = state

  return {
    videos
  }
}

export default connect(mapStateToProps)(VideoContainer)
