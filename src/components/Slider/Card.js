import React, {PropTypes} from 'react'
import { Link } from 'react-router'
const styles={
  container: {
    transform: 'scale(1)',
    visibility: 'visible',
    width: '100%',
    height: '100%',
    top: '-41%',
    left: '-41%',
    transitionTimingFunction: 'cubic-bezier(0.5, 0, 0.1, 1)',
    transitionDuration: '400ms',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    backgroundSize: '100% 100%',
    backgroundImage: '',
  },
  overlay: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '-1px',
    left: '-1px',
    cursor: 'pointer',
    zIndex: 2,
    backgroundColor: 'rgba(0,0,0,0)',
    backgroundImage: 'linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,0) 33%,rgba(0,0,0,.85) 100%)',
  },
  hitzone: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    right: '0px',
    bottom: '0px',
    zIndex: '1',
  },
}
const Card = (props) =>{
  const {title, age, year, description, star, slug, href} = props
  styles.container.backgroundImage = `url(${props.thumb})`
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
      {
        slug ? <a href={`http://www.eternityready.com/channel/${slug}`}>
                  <div className="play"></div>
              </a> :
            <a href={href}>
              <div className="play"></div>
            </a>
      }
        </div>
        <div className="infoteaser">
          <span className="title">{title}</span>
          <span className="stars">{ Array(star || 0).join('★') }</span>
          {
            age ? <span className="age">{age}</span> : ''
          }
          <span className="year">{ year}</span>
            <span className="info">
              {description}
          </span>
          </div>
  </div>
  )
}


Card.PropTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
  thumb: PropTypes.string.isRequired,
}

export default Card
