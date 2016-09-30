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
    const arrays = []
    const copy = this.props.channels.slice(0, -1)
    while(copy.length > 0)
      arrays.push(copy.splice(0, 6))
    const sliders = arrays.map((elem, index) => {
        return <SearchRow
                key={index}
                items={elem}
                sliderTitle=""
                setVisibleItems={this.setVisibleItems}
                />
    })

    return (
      <div className="main">
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
