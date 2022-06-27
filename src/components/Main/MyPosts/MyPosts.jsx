import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
          My post
          <div>
            <textarea></textarea>
            <button>Add post</button>
          </div>
          <Post message='How are you?'/>
          <Post message="It's my first post"/>
        </div>
    )
}

export default MyPosts;