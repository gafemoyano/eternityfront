import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'
import { getChannel } from '../reducers/channels'

class Player extends Component {

  static propTypes = {
  }
  static defaultProps = {
  }

  createMarkup() { return {__html: this.props.html} }

  render() {
    return (
      <div className="main">
        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    html: getChannel(ownProps.params.id).html,
  }
}

export default connect(mapStateToProps, {
  fetchChannels,
})(Player)

