import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'
import React, { PropTypes, Component } from 'react'
import Scroll from './Scroll'

class Videos extends Component {
  renderVideos() {
    const { category, videosStore, videos } = this.props
    const items = category in videos ? videos[category].items : []
    const result = items.map((videoId, i) => {
      const video = videosStore[videoId]

      return (
        <Video
          key={i}
          video={video}
        />
      )
    })

    return result
  }

  render() {
    const video = this.renderVideos()

    return (
      <GridList
        className="main"
        cols={3}
        cellHeight={240}>
        {video}
      </GridList>
    )
  }
}

Videos.PropTypes = {
  items: PropTypes.array.isRequired
}

export default Scroll(Videos)
