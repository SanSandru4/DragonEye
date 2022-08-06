import React from "react";
import Like from "./Like/Like";
import './Post.css';

const Post = (props) => {
    return (
          <div>
            { props.message }
            <div>
              <Like pushLike = { props.like } />
            </div>
          </div>
    )
}

export default Post;