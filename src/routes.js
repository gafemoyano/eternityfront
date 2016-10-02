import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App'
import HomePage from './containers/HomePage'
import Player from './containers/Player'
import SearchResults from './containers/SearchResults'

export default (
<div>
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/browse" component={HomePage}/>
    <Route path="/search/:query" component={SearchResults}/>
  </Route>
  <Route path="/watch/:id" component={Player}/>
</div>
)
