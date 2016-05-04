import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import SearchNav from '../components/SearchNav'
import SearchVideos from '../components/SearchVideos'
import searchActions from '../actions/search'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'

class SearchContainer extends Component {
  componentDidMount() {
    const { videoQuery, videos, search } = this.props

    if (!(videoQuery in videos)) {
      this.props.search.fetchSearchResults(videoQuery)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { videoQuery, videos, search } = this.props

    if (!(nextProps.videoQuery in videos)) {
      if( videoQuery !== nextProps.videoQuery) {
        this.props.search.fetchSearchResults(nextProps.videoQuery)
      }
    }
  }

  render() {
    const { videoQuery, videoStore, videos, search, pushState } = this.props

    return (
      <div>
        <SearchNav pushState={pushState} />
        <SearchVideos
          videoQuery={videoQuery}
          videos={videos}
          videoStore={videoStore}
          search={search}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { entities, videos } = state
  const videoQuery = state.router.params.query

  return {
    videoStore: entities.videos,
    videoQuery,
    videos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    search: bindActionCreators(searchActions, dispatch),
    pushState: bindActionCreators(pushState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
