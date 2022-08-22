import React from "react";
import MyPosts from "./MyPosts";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/blog-reducer";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let addPost = () => { 
        props.store.dispatch(addPostActionCreator());
    };

    let OnPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (
      <MyPosts updateNewPostText = { OnPostChange } 
                addPost = { addPost } 
                posts = { state.blogPage.posts }
                newPostText = { state.blogPage.newPostText }/>
    )
}

export default MyPostsContainer;