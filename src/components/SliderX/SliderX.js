import React, { Component, PropTypes } from 'react'
import SliderItem from './SliderItem'
import SliderRowHeader from './SliderRowHeader'
import { connect } from 'react-redux'
import { fetchChannels } from '../../actions'
import { activateItem, deactivateItems } from '../../actions/sliders'
import {
  Grid, Row, Col
} from 'react-bootstrap'
class SliderX extends Component {

  static propTypes = {
    items: PropTypes.array.isRequired,
    activeItemId: PropTypes.number,
    visibleColumns: PropTypes.number.isRequired,
    itemWidth: PropTypes.number.isRequired,
    sliderWidth: PropTypes.number,
  }

  static defaultProps = {
    isFetching: true,
    loadingLabel: 'Loading...'
  }

  state = {
    trackPosition: 0,
    activeSlide: null,
    goingNext: false,
    goingPrev: false,
    sliderHeight: 250,
    indexModifier: 0,
    preparePrev: false,
    mouseDown: false,
    detailsSlide: null,
    sliderHovered: false,
  };

  reInit = () => {

  }

  isTouchDevice() {
    return (('ontouchstart' in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
  }

  componentDidMount() {
    this.props.fetchChannels()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.reInit);
  }

  getStyles(){
    const duration = '450ms'
    const tileWidth = 344
    const tileHeight = (tileWidth / (16/9))

    const styles = {

      row: {
        boxSizing: 'border-box',
        margin: '3vw 15px',
        padding: '0px',
      },
      slider: {
        width: '100%'
      },
      sliderContent:{
        transition: `${duration} transform`,
        fontSize: 0,
        whiteSpace: 'nowrap',
        margin: `${(tileHeight / 2)} 0`,
        paddingBottom: 10,
      },

      tile:{
        position: 'relative',
        display: 'inline-block',
        width: tileWidth,
        height: tileHeight,
        marginRight: '10px',
        fontSize: '20px',
        cursor: 'pointer',
        transition: `${duration} all`,
        transformOrigin: 'center left',
      },
      tileImg: {
        width: tileWidth,
        height: tileHeight,
        objectFit: 'cover',
        },
      tileDetails: {
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        top: '0',
        fontSize: 10,
        opacity: '0',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
        transition: `${duration} opacity`,
      }
    }
    return styles
  }

  handleOnMouseEnter = (event) => {
    console.log(event)
  }

  render () {
    const styles = this.getStyles()
    const { items, title, activateItem, deactivateItems, activeItemIdx } = this.props
    let sliderItems = items.map((elem, index) => {
      return (
        <div style={styles.tile} >
        <SliderItem item={elem}
                   key={elem.uniqueId}
                   id={elem._id}
                   index={index}
                   thumb={elem.thumb}
                   activeItemIdx={activeItemIdx}
                   handleOnMouseEnter={activateItem}
                   handleOnMouseLeave={deactivateItems}
        />
      </div>)
    });

    return(
      <div className="slider-container">
<div style={styles.row}>
        <SliderRowHeader title="Trending Movies Temp" />
        <div style={styles.slider}>
          <div style={styles.sliderContent}>
            {sliderItems}
          }
          </div>
        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.sliders.items,
    visibleColumns: state.sliders.visibleColumns,
    itemWidth: state.sliders.itemWidth,
    activeItemIdx: state.sliders.activeItemIdx
  }
}

export default connect(mapStateToProps, {
  fetchChannels,
  activateItem,
  deactivateItems,
})(SliderX)

