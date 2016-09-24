import React from 'react';
import { render } from 'react-dom'
import Root from './containers/Root'
import configureStore from './store/configureStore'
import './css/bootstrap.css'
import './css/bootstrap-theme.css'
const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
