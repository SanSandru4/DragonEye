import React from "react";
import './Main.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo"
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Main = (props) => {
    return (
      <main className='main'>
        <ProfileInfo />
        <MyPostsContainer store = { props.store } />
      </main>
    )
}

export default Main;