import React, { Component, PropTypes } from 'react'

export default function (InnerComponent) {
  class ScrollComponent extends Component {
    constructor (props) {
      super(props)
      this.onScroll = this.onScroll.bind(this)
    }

    componentDidMount () {
      window.addEventListener('scroll', this.onScroll, false)
    }

    componentWillUnmount () {
      window.removeEventListener('scroll', this.onScroll, false)
    }

    onScroll () {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
        this.props.scrollFunc()
      }
    }

    render () {
      return (
        <InnerComponent
          {...this.props}
        />
      )
    }
  }

  return ScrollComponent
}
