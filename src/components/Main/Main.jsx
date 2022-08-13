import React from "react";
import './Main.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Main = (props) => {
    return (
      <main className='main'>
        <ProfileInfo />
        <MyPosts state = { props.state } 
                newPostText = { props.state.newPostText }
                dispatch = { props.dispatch } 
        />
      </main>
    )
}

export default Main;