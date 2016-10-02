import React, { Component, PropTypes } from 'react'
import Slider from '../components/Slider/'
import { connect } from 'react-redux'
import Billboard from '../components/Billboard'
// import { readyChannels, topChannels } from '../data/staticChannels'
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
      <div>
        <Billboard />
        <div style={{display: 'flex', justifyContent: 'center',     padding: '30px 15%'}} >
          <div style={{flex: 1}} >
            <ins className="adsbygoogle"
              style={{display: 'block'}}
              data-ad-client="ca-pub-8022147088754346"
              data-ad-slot="4861967110"
              data-ad-format="auto"></ins>
          </div>
        </div>

        {/*<Slider items={topChannels} sliderTitle="Top Channels"/>
                        <Slider items={readyChannels} sliderTitle="Eternity Ready Channels"/>
         */}
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

