import { connect } from 'react-redux'
import React,
  { Component,
  PropTypes }      from 'react'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
  }

  render() {
    return (
      <div>
        <h1>Videos</h1>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { videos } = state;
  return {
    videos
  }
}

export default connect(mapStateToProps)(App)
