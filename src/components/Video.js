import React from 'react'
import GridTile from 'material-ui/lib/grid-list/grid-tile'
import { Link } from 'react-router'

class Video extends React.Component {
  render () {
    const { post } = this.props;

    return (
      <Link to={`/video/${post.id}`}>
        <GridTile>
          <img src={post.snippet.thumbnails.high.url}/>
        </GridTile>
      </Link>
    )
  }
}

export default Video
