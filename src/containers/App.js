import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import { fetchCategories } from '../actions/categories'
import categoryActions from '../actions/categories'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.actions.categories.fetchCategories()
  }

  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    categories: bindActionCreators(categoryActions, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
