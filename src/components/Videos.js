import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'
import React, { PropTypes, Component } from 'react'

class Videos extends Component {
  componentDidMount() {
    const { category, categories, videos, trendingActions, categoriesActions } = this.props

    if (!Object.keys(categories).length) {
      this.props.categoriesActions.fetchCategories()
    }

    if (!(category in videos)) {
      this.props.trendingActions.fetchTopTrending(category)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { actions, category, dispatch } = this.props

    if (category !== nextProps.category) {
      this.props.trendingActions.fetchTopTrending(nextProps.category)
    }
  }

  renderVideos() {
    const { category, videosStore, videos } = this.props
    const items = category in videos ? videos[category].items : []
    const result = items.map((videoId, i) => {
      const video = videosStore[videoId]

      return (
        <Video
          key={i}
          video={video} />
      )
    })

    return result
  }

  render () {
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

export default Videos
