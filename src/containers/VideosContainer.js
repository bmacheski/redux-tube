import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import Videos from '../components/Videos'
import { fetchMostPopular } from '../actions'
import LeftNav from 'material-ui/lib/left-nav'
import TextField from 'material-ui/lib/text-field'

class VideosContainer extends Component {
  render() {
    const { items, categoryItems } = this.props

    if (categoryItems) {
      var menuItems = categoryItems
        .map((item) => {
          return {
            text: item.snippet.title
          }
      }).sort((a, b) => {
        if (a.text > b.text) return 1
        if (a.text < b.text) return -1
        else return 0
      })
    }

    let header = (
      <TextField hintText="Search YouTube." />
    )

    return (
      <div>
        <LeftNav
          ref="leftNav"
          header={header}
          className="nav"
          menuItems={menuItems} />
        <main>
          {items.length > 0 &&
            <Videos items={items} />
          }
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {

  const { videos, trendingCategories } = state
  const { isFetching, items } = videos.trending || { isFetching: true, items: [] }
  const { categoryItems } = trendingCategories.categories || { items: [] }

  return {
    items,
    categoryItems
  }
}

export default connect(mapStateToProps)(VideosContainer)
