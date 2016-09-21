import React, { Component } from 'react'
import Slider from '../components/slider/Slider'
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'

class HomePage extends Component {

  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    return (
      <div className="main">
        <Slider items={this.props.items} sliderTitle='Popular Channels'/>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.channels.items,
  }
}

export default connect(mapStateToProps, {
  fetchChannels,
})(HomePage)

