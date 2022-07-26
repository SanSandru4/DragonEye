import React from "react";
import Like from "./Like/Like";
import './Post.css';

const randNum = () => {
  const min = 1;
  const max = 10;
  const rand = min + Math.floor(Math.random() * (max - min));
  return rand;
}

const Post = (props) => {
    return (
          <div>
            { props.message }
            <div>
              <Like pushLike = { randNum() } />
            </div>
          </div>
    )
}

export default Post;