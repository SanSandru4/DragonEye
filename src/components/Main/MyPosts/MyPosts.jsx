import React from "react";
import './MyPosts.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
          My post
          <Post />
          <Post />
          <Post />
        </div>
    )
}

export default MyPosts;