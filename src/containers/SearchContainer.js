import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import SearchNav from '../components/SearchNav'
import SearchVideos from '../components/SearchVideos'
import searchActions from '../actions/search'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'

class SearchContainer extends Component {
  render() {
    return (
      <div>
        <SearchNav
        {...this.props} />
        <SearchVideos
        {...this.props} />
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
