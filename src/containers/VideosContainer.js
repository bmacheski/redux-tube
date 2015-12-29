import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { fetchTopTrending } from '../actions/trending'
import Videos from '../components/Videos'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import Menu from 'material-ui/lib/menus/menu'

class VideosContainer extends Component {
  render() {
    const { categories } = this.props
    const categoriesArr = Object.keys(categories).map((val, i) => {
      return {
        category: categories[val].snippet.title,
        id: categories[val].id
      }
    })

    const menuItems = categoriesArr
      .sort((a, b) => {
        if (a.category > b.category) return 1
        if (a.category < b.category) return -1
        else return 0
      }).map((item) => {
      return <MenuItem primaryText={item.category} key={item.id}></MenuItem>
    })

    return (
      <div>
        <LeftNav
          className="left-nav">
          {menuItems}
        </LeftNav>
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
