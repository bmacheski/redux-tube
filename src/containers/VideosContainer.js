import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { fetchTopTrending } from '../actions/trending'
import Videos from '../components/Videos'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Menu from 'material-ui/lib/menus/menu'
import LeftNav from 'material-ui/lib/left-nav'
import CategoriesNav from '../components/CategoriesNav'

class VideosContainer extends Component {
  render() {
    const { categories } = this.props

    return (
      <div>
        <CategoriesNav
          categories={categories} />
        <main>
          <Videos {...this.props} />
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

export default connect(mapStateToProps)(VideosContainer)
