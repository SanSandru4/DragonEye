import React from "react";
import './MyPosts.css';
import Post from "./Post/Post"; 
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";

const MyPosts = (props) => {

    let postData = props.state.posts;
    let postElements = postData.map( p => ( <Post message = { p.message } like = { p.likesCount }/> ) );
    let newPostElement = React.createRef();

    let addPost = () => { 
        props.dispatch(addPostActionCreator());
    };

    let OnPostChange = () => {
        let text = newPostElement.current.value; 
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className="postBlok">
          <h3>My post</h3>
          <div>
            <div>
              <textarea onChange = { OnPostChange } ref = { newPostElement } value = { props.newPostText } />
            </div>
            <div>
              <button type="Submit" onClick = { addPost }>Add post</button>
            </div>
          </div>
          <div>
            { postElements }
          </div>
        </div>
    )
}

export default MyPosts;