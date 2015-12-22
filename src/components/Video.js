import React    from 'react'
import GridTile from 'material-ui/lib/grid-list/grid-tile'

class Video extends React.Component {
  render () {
    const { post } = this.props;
    return (
      <GridTile>
        <img src={post.snippet.thumbnails.high.url} />
      </GridTile>
    )
  }
}

export default Video
