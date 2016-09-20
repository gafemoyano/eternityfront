import React, { Component } from 'react'

class Card extends Component {
  getStyles(){
    const styles = {

    }
    return styles
  }

  render () {
    return(
      <div className="card">
        <div className="overlay">
          <div className="playZone">
          </div>
          <div className="infoZone">
          </div>
        </div>
      </div>
    )
  }
}
export default Card
