import React from "react";
import './MyPosts.css';
import Post from "./Post/Post"; 

const MyPosts = (props) => {

    let postData = props.posts;
    let postElements = postData.map( p => ( <Post message = { p.message } like = { p.likesCount }/> ) );
    let newPostElement = React.createRef();

    let onAddPost = () => { 
        props.addPost();
    };

    let OnPostChange = () => {
        let text = newPostElement.current.value; 
        props.updateNewPostText(text);
    };

    return (
        <div className="postBlok">
          <h3>My post</h3>
          <div>
            <div>
              <textarea onChange = { OnPostChange } ref = { newPostElement } value = { props.newPostText } />
            </div>
            <div>
              <button type="Submit" onClick = { onAddPost }>Add post</button>
            </div>
          </div>
          <div>
            { postElements }
          </div>
        </div>
    )
}

export default MyPosts;