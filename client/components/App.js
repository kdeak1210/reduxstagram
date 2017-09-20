import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
  return{
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

// Takes regular Main component, adds all props/data/action creators from store
// connect injects the data from the store into whatever level component needed
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;