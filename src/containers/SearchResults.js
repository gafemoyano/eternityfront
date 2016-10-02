import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getVisibleChannels } from '../reducers/channels'
import { setQuery } from '../actions/'
import SearchRow from '../components/SearchRow'

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
          <div style={{flex: 1}}>
            <img src={channel.thumb} alt={channel.title}/>
            <span>{channel.title}</span>
          </div>
        )
    })

    return (
      <div className="main" style={{display: 'flex'}}>
        {this.props.channels.length === 0 ?
           <div>No results where found for your search.</div> : <div>{sliders}</div>}
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
