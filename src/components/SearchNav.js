import React, { Component, PropTypes } from 'react'
import LeftNav from 'material-ui/lib/left-nav'
import Nav from './Nav'

class SearchNav extends Component {
  render() {
    const { pushState } = this.props
    const items = <h1>Search Results</h1>

    return (
      <Nav
        pushState={pushState}
        items={items}
      />
    )
  }
}

export default SearchNav
