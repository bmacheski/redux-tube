import Video from './Video'
import GridList from 'material-ui/lib/grid-list/grid-list'
import React, { PropTypes } from 'react'

class Videos extends React.Component {
  render () {
    return (
      <GridList
        cols={3}
        cellHeight={240}>
        {this.props.items.map((post, i) =>
          <Video key= {i} post={post} />
        )}
      </GridList>
    )
  }
}

Videos.PropTypes = {
  items: PropTypes.array.isRequired
}

export default Videos
