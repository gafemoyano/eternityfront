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

          {this.state.queryString && <Redirect to={`/search/${this.state.queryString}`}/> }

          <Match exactly pattern="/" component={HomePage}/>
          <Match pattern="/browse" component={HomePage}/>
          <Match pattern="/player/:id" component={Player}/>
          <Match pattern="/search/:query" component={SearchResults}/>
          <Miss component={() => <Redirect to="/browse"/>} />
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

