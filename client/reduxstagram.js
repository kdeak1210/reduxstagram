import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import css from './styles/style.styl';

import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/** Render out the Router component, and write out all the routes to match.
 * At the top level "/" (every), use the Main component. Then, the IndexRoute 
 * tells which component to render out at JUST "/". The Single component is nested
 * and rendered with a param of postId. Now, both PhotoGrid and Single are children
 * of the Main component (because they are both nested within)
*/
const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
  
);

ReactDOM.render(router, document.getElementById('root'));