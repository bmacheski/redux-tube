import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { fetchCategories } from '../actions/categories'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
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
