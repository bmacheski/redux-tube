import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { pushState } from 'redux-router'
import fetchTrendingByCategory from '../actions/trending'

class CategoriesNav extends Component {
  constructor(props) {
    super(props)
  }

  boundClick(id) {
    const { dispatch, actions} = this.props
    this.props.actions.trending.fetchTrendingByCategory(id)
  }

  render() {
    const { categories } = this.props
    const categoriesArr = Object.keys(categories)
    .map((val, i) => {
      return {
        category: categories[val].snippet.title,
        id: categories[val].id,
        assignable: categories[val].snippet.assignable
      }
    })
    const menuItems = categoriesArr
      .sort((a, b) => {
        if (a.category > b.category) return 1
        if (a.category < b.category) return -1
        else return 0
      })
      .filter((val) => {
        return val.assignable !== false
      })
      .map((item, id) => {
      return <MenuItem primaryText={item.category} key={item.id} onClick={this.boundClick.bind(this,item.id)}></MenuItem>
    }.bind(this))

    return (
      <LeftNav className="left-nav">
        {menuItems}
      </LeftNav>
    )
  }
}

CategoriesNav.PropTypes = {
  categories: PropTypes.object.isRequired
}

export default CategoriesNav
