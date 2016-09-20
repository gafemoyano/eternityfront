import React, { Component } from 'react'
import SliderRowHeader from './SliderRowHeader'
import './SliderRow.css'
import SliderX from './SliderX'

class SliderRow extends Component {

  getStyles(){
    const styles = {

    }
    return styles
  }

  render () {
    const { title } = this.props
    return(
      <div className="sliderRow">
        <SliderRowHeader title={title} />
        <div className="rowContent">
          <SliderX />
        </div>
      </div>
    )
  }
}
export default SliderRow
