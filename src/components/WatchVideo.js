import React from 'react'
import YouTube from 'react-youtube'

export default class Video extends React.Component {
  render () {
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
