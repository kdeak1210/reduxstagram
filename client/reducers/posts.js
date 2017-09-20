// A reducer takes in two things:

// 1. The action (information about what happened)
// 2. Copy of current state

// default param empty array bc first time run state is undefined
function posts(state = [], action){
  
  switch(action.type){
    
    case 'INCREMENT_LIKES':
    // return the updated state
      console.log('Incrementing Likes');
      const i = action.index;
      return [
        ...state.slice(0,i), // before the one we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // after the one we are updating        
      ]
      break;
    
    default:
      // All the reducers always run; make sure to include default
      return state;
  }
}

export default posts;