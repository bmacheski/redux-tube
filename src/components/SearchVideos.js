import React, { Component, PropTypes } from 'react'
import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'
import Scroll from './Scroll'

class SearchVideos extends Component {
  renderVideos() {
    const { videoQuery, videoStore, videos } = this.props

    const items = videoQuery in videos ? videos[videoQuery].items : []
    const searchResult = items.map((videoId, i) => {
      const video = videoStore[videoId]
      return <Video key={i} video={video} />
    })

    return searchResult
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

export default SearchVideos
