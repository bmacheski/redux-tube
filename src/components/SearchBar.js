import React, { Component, PropTypes } from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import TextField from 'material-ui/lib/text-field'

class SearchBar extends Component {
  handleSearch(e) {
    const { pushState } = this.props
    if (e.keyCode === 13) {
      const query = e.currentTarget.value.trim()
      this.props.pushState(null, `/search/${query}`)
    }
  }

  render() {
    const header = (
      <TextField
        hintText="Search YouTube."
        ref="search"
        onKeyUp={this.handleSearch.bind(this)} />
    )

    return (
      <MenuItem>
        {header}
      </MenuItem>
    )
  }
}

export default SearchBar
