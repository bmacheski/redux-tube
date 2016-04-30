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

  componentDidMount() {
    const { category, categories, videos, trendingActions, categoriesActions } = this.props

    if (!Object.keys(categories).length) {
      this.props.categoriesActions.fetchCategories()
    }

    if (!(category in videos)) {
      this.props.trendingActions.fetchTopTrendingIfNeeded(category)
    }
  }

  componentWillReceiveProps(nextProps) {
    const { category, dispatch } = this.props

    if (category !== nextProps.category) {
      this.props.trendingActions.fetchTopTrendingIfNeeded(nextProps.category)
    }
  }

  handleScroll() {
    const { category } = this.props
    this.props.trendingActions.fetchTopTrendingIfNeeded(category)
  }

  render() {
    const { category, categories, videos, trendingActions, categoriesActions, dispatch, videosStore, pushState } = this.props
    return (
      <div>
        <CategoriesNav
          {...this.props} />
        <Videos
          category={category}
          categories={categories}
          videos={videos}
          trendingActions={trendingActions}
          categoriesActions={categoriesActions}
          dispatch={dispatch}
          videosStore={videosStore}
          scrollFunc={this.handleScroll.bind(this)} />
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

function mapDispatchToProps(dispatch) {
  return {
    trendingActions: bindActionCreators(trendingActions, dispatch),
    categoriesActions: bindActionCreators(categoryActions, dispatch),
    pushState: bindActionCreators(pushState, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideosContainer)
