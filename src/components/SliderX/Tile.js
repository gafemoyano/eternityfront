import React, { Component } from 'react'

class Tile extends Component {

  getStyles(image) {
    const styles = {
      width: '100%',
      height: '100%',
      position: 'relative',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: '100% 100%',
      backgroundImage: `url(${image})`,
      padding: '26.125% 0',
    }
    return styles
  }

  render () {
    const { img } = this.props
    const styles = Object.assign({}, this.getStyles(img))
    return(
      <div style={styles} ></div>
    )
  }
}
export default Tile
