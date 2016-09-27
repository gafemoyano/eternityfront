import React, { Component, PropTypes } from 'react'
import NavBar from '../components/NavBar'
import Slider from '../components/Slider/'
import { connect } from 'react-redux'
import { readyChannels, topChannels } from '../data/staticChannels'

class HomePage extends Component {

  static propTypes = {
    byCategory: PropTypes.object.isRequired,
  }
  static defaultProps = {
    byCategory: {},
  }

  render() {
    const { byCategory } = this.props

    const sliders = Object.keys(byCategory).map((value, index) =>{
        return <Slider key={index} items={byCategory[value]} sliderTitle={value}/>
    })

    return (
      <div className="main">
        <NavBar />
        <Slider items={topChannels} sliderTitle="Top Channels"/>
        <Slider items={readyChannels} sliderTitle="Eternity Ready Channels"/>
        { sliders}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    byCategory: state.channels.byCategory,
  }
}

export default connect(mapStateToProps)(HomePage)

