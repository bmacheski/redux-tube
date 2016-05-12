import React, { Component, PropTypes } from 'react'
import MenuItem from 'material-ui/lib/menus/menu-item'
import TextField from 'material-ui/lib/text-field'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

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
        onKeyUp={this.handleSearch}
      />
    )

    return <MenuItem>{header}</MenuItem>
  }
}

export default SearchBar
