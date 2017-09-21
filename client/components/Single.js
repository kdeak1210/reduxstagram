import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';
import { Link } from 'react-router';

class Single extends Component{
  render(){
    // index of the post
    const i = this.props.posts.findIndex((post) => 
      post.code === this.props.params.postId);
    // get us the post
    const post = this.props.posts[i];

    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments></Comments>
      </div>
    );
  }
}

export default Single;