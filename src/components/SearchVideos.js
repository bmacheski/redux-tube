import React, { Component, PropTypes } from 'react'
import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'

class SearchVideos extends Component {
  componentDidMount() {
    const { videoQuery, videos } = this.props

    if (!(videoQuery in videos)) {
      this.props.actions.search.fetchSearchResults(videoQuery)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { videoQuery, videos } = this.props

     if (!(nextProps.videoQuery in videos)) {
      if( videoQuery !== nextProps.videoQuery) {
        this.props.actions.search.fetchSearchResults(nextProps.videoQuery)
      }
    }
  }

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
