import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'
import HomePage from './HomePage'
import Player from './Player'
import SearchResults from './SearchResults'
import { Match, Miss, Redirect } from 'react-router'

class App extends Component {
  state = {
    queryString: null,
  }
  static propTypes = {
    byCategory: PropTypes.object.isRequired,
  }
  static defaultProps = {
    byCategory: {},
  }

  setQueryString(query) {
    this.setState({queryStringy: query})
  }

  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    return (
        <div className="App">
          {this.props.children}
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    byCategory: state.channels.byCategory,
  }
}

export default connect(mapStateToProps, {
  fetchChannels,
})(App)

