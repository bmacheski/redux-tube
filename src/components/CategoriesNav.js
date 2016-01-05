import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'
import { Link } from 'react-router'
import SearchBar from './SearchBar'
import Nav from './Nav'

class CategoriesNav extends Component {
  render() {
    const { categories, pushState } = this.props

    const categoriesArr = Object.keys(categories)
      .map(val => {
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
      .filter(val => {
        return val.assignable !== false
      })
      .map((item, id) => {
        return (
          <MenuItem
            containerElement={<Link to={`/videos/${item.id}`} />}
            primaryText={item.category}
            key={item.id}>
          </MenuItem>
        )
      })

    return (
      <Nav
        items={menuItems}
        pushState={pushState}/>
    )
  }
}

CategoriesNav.PropTypes = {
  categories: PropTypes.object.isRequired
}

export default CategoriesNav
