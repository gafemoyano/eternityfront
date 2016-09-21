import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import { BrowserRouter, Match, Miss, Redirect } from 'react-router'



export default class Root extends Component {
  render() {
    const { store } = this.props
    return (
      <Provider store={store}>
      <div>
        <BrowserRouter>
          <Match pattern="/" component={App}/>
        </BrowserRouter>
      </div>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}
