import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = props.state.posts;
    let postElements = postData.map( p => ( <Post message = { p.message } /> ) );

    return (
        <div className="postBlok">
          <h3>My post</h3>
          <div>
            <div>
              <textarea></textarea>
            </div>
            <div>
              <button>Add post</button>
            </div>
          </div>
          <div>
            { postElements }
          </div>
        </div>
    )
}

export default MyPosts;