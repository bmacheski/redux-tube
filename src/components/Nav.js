import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import SearchBar from './SearchBar'

class Nav extends Component {
  render() {
    const { items, pushState } = this.props

    return (
      <LeftNav
        className="left-nav">
        <SearchBar pushState={pushState} />
          {items}
      </LeftNav>
    )
  }
}

export default Nav
