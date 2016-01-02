import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Videos from '../components/Videos'
import CategoriesNav from '../components/CategoriesNav'
import trendingActions from '../actions/trending'
import categoryActions from '../actions/categories'
import { bindActionCreators } from 'redux'
import { pushState } from 'redux-router'

class VideosContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <CategoriesNav
          {...this.props} />
        <Videos
          {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { entities, videos } = state
  const category = state.router.params.category ? state.router.params.category : 'mostPopular'

  return {
    videosStore: entities.videos,
    categories: entities.categories,
    videos,
    category
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    trending: bindActionCreators(trendingActions, dispatch),
    categories: bindActionCreators(categoryActions, dispatch),
    pushState: bindActionCreators(pushState, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosContainer)
