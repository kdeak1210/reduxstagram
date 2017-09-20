// A reducer is created for every single piece of state
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import posts from './posts';
import comments from './comments';

const rootReducer = combineReducers({
  posts,
  comments,
  routing: routerReducer
});

// Three things live in the state; posts, comments, changes of the URL

export default rootReducer;

