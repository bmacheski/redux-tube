import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'
import React, { PropTypes, Component } from 'react'

class Videos extends Component {
  renderVideos() {
    const { category, videos, trendingVideos } = this.props
    const items = category in trendingVideos ? trendingVideos[category].items : []

    let result = items.map((videoId, i) => {
      const video = videos[videoId]
      return  <Video key={i} video={video} />
    })
    return result
  }
  render () {
    let video = this.renderVideos()

    return (
      <div>
      <GridList
        cols={3}
        cellHeight={240}>
        {video}
      </GridList>
      </div>
    )
  }
}

Videos.PropTypes = {
  items: PropTypes.array.isRequired
}

export default Videos
