import { connect } from 'react-redux'
import VideosContainer      from './VideosContainer'
import { fetchMostPopular } from '../actions'
import React,
  { Component,
  PropTypes }               from 'react'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchMostPopular())
  }

  renderView() {
    const { path } = this.props;
    switch(path[0]) {
      case 'videos':
        return <VideosContainer />
    }
  }

  render() {
    const { items } = this.props
    return (
      <div>
        {this.renderView()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { navigator } = state;
  return {
    path: navigator.route.path
  }
}

export default connect(mapStateToProps)(App)
