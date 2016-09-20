import React from 'react'

const styles = {
  rowHeader: {
    lineHeight: 1.3,
    margin: 0,
  },
  rowTitle: {
    fontSize: '1.4vw',
    color: '#999',
    fontWeight: '700',
    margin: '0 4% .5em',
    textDecoration: 'none',
    display: 'inline-block',
    minWidth: '6em',
  }
}
const SliderRowHeader = (props) =>(
  <h2 style={styles.rowHeader} >
    <span className="rowTitle" style={styles.rowTitle}>
      {props.title}
    </span>
  </h2>
)

export default SliderRowHeader
