import { connect } from 'react-redux'
import { fetchTopTrending } from '../actions/trending'
import { fetchCategories } from '../actions/categories'
import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    dispatch(fetchTopTrending())
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)
