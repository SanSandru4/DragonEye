import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
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
            <Post message='How are you?'/>
            <Post message="It's my first post"/>
          </div>
        </div>
    )
}

export default MyPosts;