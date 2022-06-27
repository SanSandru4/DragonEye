import React from "react";
import './Like.css';

const Like = (props) => {
    return (
              <span>
                like {props.pushLike}
              </span>
    )
}

export default Like;