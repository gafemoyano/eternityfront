import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getChannel } from '../reducers/channels'
import { Link } from 'react-router'
import back from '../assets/img/back.gif'

class Player extends Component {
  state = {
    channel: {}
  }
  static propTypes = {
    channel: PropTypes.object.isRequired,
  }
  static defaultProps = {
    channel: {},
  }

  createMarkup() { return {__html: this.props.channel.embedCode} }

  render() {
    return (
      <div className="main">
        <div className="row">
          <div style={{margin: '0 50px'}}>
            <Link to="/browse"><img src={back} alt="Back Button" /></Link>
          </div>
        </div>
        <div className="row">
          <div className="playerContainer" dangerouslySetInnerHTML={this.createMarkup()} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    channel: getChannel(state, ownProps.params.id)
  }
}

export default connect(mapStateToProps)(Player)
