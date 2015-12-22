import { connect }          from 'react-redux'
import Videos               from '../components/Videos'
import { fetchMostPopular } from '../actions'
import React,
  { Component,
  PropTypes }               from 'react';

class VideosContainer extends Component {
  render() {
    const { items } = this.props
    return (
      <div>
        <main>
          {items.length > 0 &&
            <Videos items={items} />
          }
        </main>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { videos } = state
  const {
    isFetching,
    items
    } = videos['trending'] || { isFetching: true, items: [] }

  return {
    items
  }
}

export default connect(mapStateToProps)(VideosContainer)
