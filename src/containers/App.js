import { connect } from 'react-redux'
import { fetchTrending } from '../actions/trending'
import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    // dispatch(fetchCategories())
    dispatch(fetchTrending())
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
