import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleChannels } from '../reducers/channels'
import { setQuery } from '../actions/'
import { Link } from 'react-router'
import '../assets/css/search.css'
import back from '../assets/img/back.gif'

class SearchResults extends Component {

  static propTypes = {
    channels: PropTypes.array.isRequired,
  }
  static defaultProps = {
    channels: [],
  }
  constructor(props) {
    super(props);
    const { search, query, setQuery } = this.props
    if(search !== query){
      setQuery(query)
    }
  }

  setVisibleItems = (visibleItems)=> {
    this.setState({
      visibleItems: visibleItems
    })
  }

  render() {
    const sliders = this.props.channels.map((channel, index) => {
        return (
          <Link to={`/watch/${channel._id}`}>
            <div className="search-item">
              <div className="search-background" style={{backgroundImage: `url(${channel.thumb})`}}>
              </div>
              <div className="search-caption">{channel.title}</div>
            </div>
          </Link>
        )
    })

    return (
      <div className="main">
        <div className="row">
          <div style={{margin: '0 50px', cursor: 'pointer'}}>
            <Link to="/browse"><img src={back} alt="Back Button" /></Link>
          </div>
        </div>
        <div className="search-container">
         {sliders}
       </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    channels: getVisibleChannels(state, ownProps.params.query),
    search: state.search.query,
    query: ownProps.params.query,
  }
}

export default connect(mapStateToProps, {setQuery})(SearchResults)
