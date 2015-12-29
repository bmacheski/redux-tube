import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import MenuItem from 'material-ui/lib/menus/menu-item'

class CategoriesNav extends Component {
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
      })
      .map((item) => {
      return <MenuItem primaryText={item.category} key={item.id}></MenuItem>
    })

    return (
      <LeftNav>
        {menuItems}
      </LeftNav>
    )
  }
}

CategoriesNav.PropTypes = {
  categories: PropTypes.object.isRequired
}

export default CategoriesNav
