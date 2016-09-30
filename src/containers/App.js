import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'
import { fetchChannels } from '../actions'
import NavBar from '../components/NavBar'

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

  componentDidMount() {
    this.props.fetchChannels()
  }

  render() {
    return (
        <div className="App">
          <NavBar />
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

