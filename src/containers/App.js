import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'

class App extends Component {

  render() {
    const { children } = this.props

    return <div>{children}</div>
  }
}

export default connect()(App)
