import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Videos from '../components/Videos'
import { fetchTrending } from '../actions/trending'
import LeftNav from 'material-ui/lib/left-nav'
import TextField from 'material-ui/lib/text-field'

class VideosContainer extends Component {
  render() {
    const { items } = this.props

    // if (categoryItems) {
    //   var menuItems = categoryItems
    //     .map((item) => {
    //       return {
    //         text: item.snippet.title
    //       }
    //   }).sort((a, b) => {
    //     if (a.text > b.text) return 1
    //     if (a.text < b.text) return -1
    //     else return 0
    //   })
    // }

    // let header = (
    //   <TextField hintText="Search YouTube." />
    // )

    return (
      <div>
        <LeftNav
          ref="leftNav"
          className="nav"/>
        <main>
          <Videos {...this.props} />
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { entities, trendingVideos } = state
  let category = 'mostPopular'
  // const { isFetching, items } = videos.trending || { isFetching: true, items: [] }
  // const { categoryItems } = trendingCategories.categories || { items: [] }

  return {
    videos: entities.videos,
    trendingVideos,
    category
  }
}

export default connect(mapStateToProps)(VideosContainer)
