/** An action is just an object with information about what happened
 * and what needs to change...
 */

// increment likes (index is the post to be incremented)
export function increment(index){
  console.log("Dispatching increment");
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment){
  console.log("Dispatching add comment");
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment (the post and index of the actual comment)
export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}