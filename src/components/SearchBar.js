import React, { Component, PropTypes } from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import TextField from 'material-ui/lib/text-field'

class SearchBar extends Component {
  handleSearch(e) {
    if (e.keyCode === 13) {
      let query = e.currentTarget.value.trim()
      this.props.pushState(null, `/search/${query}`)
    }
  }

  render() {
    let header = (
      <TextField
        hintText="Search YouTube."
        ref="search"
        onKeyUp={::this.handleSearch} />
    )

    return (
      <MenuItem>
        {header}
      </MenuItem>
    )
  }
}

export default SearchBar
