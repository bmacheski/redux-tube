import React from 'react'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import { Link } from 'react-router'

class Video extends React.Component {
  render () {
    const { video } = this.props;

    return (
      <Link to={`/video/${video.id}`}>
        <GridTile>
          <img src={video.snippet.thumbnails.high.url}/>
        </GridTile>
      </Link>
    )
  }
}

export default Video
