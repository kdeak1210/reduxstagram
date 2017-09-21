import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers';

import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data (ES6 syntax)
const defaultState = {
  posts,
  comments
}

// Tell chrome about our store (to use Redux dev tools)
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;