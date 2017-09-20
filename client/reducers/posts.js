// A reducer takes in two things:

// 1. The action (information about what happened)
// 2. Copy of current state

// default param empty array bc first time run state is undefined
function posts(state = [], action){
  console.log(state, action);
  return state;
}

export default posts;