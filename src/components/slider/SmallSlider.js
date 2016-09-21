import React, { Component } from 'react'
import Slider from 'react-slick'
const styles = {
  container: {
    margin: '0 auto',
    padding: '40px',
    color: '#333',
    background: '#419be0',
  }
}
class SmallSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };
    return (
      <div style={styles.container} >
        <h2>Swipe To Slide</h2>
        <div className="">
        <Slider {...settings}>
          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>

          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
        <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
          <div >
            <div className="tile__media">
              <img className="tile__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-19.jpg" alt=""  />
            </div>
          </div>
        </Slider>
        </div>
      </div>
    )
  }
}

export default SmallSlider
