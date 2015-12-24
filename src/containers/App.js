import { connect } from 'react-redux'
import { fetchMostPopular, fetchCategories } from '../actions'
import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
    dispatch(fetchMostPopular())
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
