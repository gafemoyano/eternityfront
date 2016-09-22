import React, { Component, PropTypes } from 'react'
import Slider from '../components/slider/Slider'
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'
import { getVisibleChannels } from '../reducers/channels'
import { readyChannels, topChannels } from '../reducers/staticChannels'
class HomePage extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    byCategory: PropTypes.object.isRequired,
  }
  static defaultProps = {
    items: [],
    byCategory: {},
  }
  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    const { items, byCategory } = this.props

    const sliders = Object.keys(byCategory).map((value, index) =>{
        return <Slider key={index} items={byCategory[value]} sliderTitle={value}/>
    })

    return (
      <div className="main">
        <Slider items={readyChannels} sliderTitle="Eternity Ready Channels"/>
        <Slider items={topChannels} sliderTitle="Top Channels"/>
        { sliders}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: getVisibleChannels(state.channels),
    byCategory: state.channels.byCategory,
  }
}

export default connect(mapStateToProps, {
  fetchChannels,
})(HomePage)

