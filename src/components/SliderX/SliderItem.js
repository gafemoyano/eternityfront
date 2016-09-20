import React from 'react'
import Tile from './Tile'
import Card from './Card'

const styles = {
  padding: '5px 3px',
  margin: '10px 0px',
  lineHeight: '100px',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '2em',
  textAlign: 'center',
  width: '350px',
  transitionDuration: '400ms',
  transitionTimingFunction: 'cubic-bezier(0.5, 0, 0.1, 1)',
  transitionDelay: '0ms',
}
const tileWidth = 344
const tileHeight = (tileWidth / (16/9))
const growSize = 1.5

const slideHoverScale = 170

const SliderItem = (props) =>{
 var itemClass = 'flex-item'
  if(props.activeItemIdx === props.index) {
    itemClass += ' hovered'
  }
  styles.transform = ''

  if(props.activeItemIdx !== null) {
    const moveLeft = -( tileWidth*0.4 / growSize)
    const moveRight = tileWidth*0.5

    //Move left items on the left side of the active item
    if(props.index < props.activeItemIdx) {
      styles.transform  += ` translate3d(${moveLeft}px, 0, 0)`
     }
    //Move right items on the right side of the active item
    else if(props.index > props.activeItemIdx) {
      if(props.activeItemIdx === 0) {
        styles.transform  += ` translate3d(${moveRight}px, 0, 0)`
      }
      else  if(props.activeItemIdx !== props.visibleItems - 1) {
        styles.transform  += ` translate3d(${moveRight/ 2}px, 0, 0)`
      }
    }
    else {
      styles.transform +=` scale(${growSize})`
      if(props.index === 0)
      {
        styles.transform += ` translate3d(${moveRight/ 4}px, 0, 0)`
      } else if(props.index === props.visibleItems - 1) {
        styles.transform += ` translate3d(${moveLeft/ 2}px, 0, 0)`
      }
    }
  }
  return (
    <div
      className={itemClass}
      onMouseEnter={() => props.handleOnMouseEnter(props.index, props.id)}
      onMouseLeave={() => props.handleOnMouseLeave()}
      style={styles}
    >
      <Tile img={props.thumb} />
      <span>
        {props.activeItemIdx === props.index && <Card />}
      </span>
    </div>
  )
}
export default SliderItem
