import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { fetchTopTrending } from '../actions/trending'
import Videos from '../components/Videos'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Menu from 'material-ui/lib/menus/menu'
import LeftNav from 'material-ui/lib/left-nav'
import CategoriesNav from '../components/CategoriesNav'
import trendingActions from '../actions/trending'
import { bindActionCreators } from 'redux';

class VideosContainer extends Component {
  render() {
    const { categories, actions } = this.props

    return (
      <div>
        <CategoriesNav
          {...this.props} />
        <main>
          <Videos
            {...this.props} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { entities, trendingVideos } = state
  const category = 'mostPopular'

  return {
    videos: entities.videos,
    categories: entities.categories,
    trendingVideos,
    category
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    trending: bindActionCreators(trendingActions, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosContainer)
