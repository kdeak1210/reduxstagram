// increment likes (index is the post to be incremented)
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// add comment
export function addComment(postId, author, comment){
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