import React from "react";
import './Main.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo"

const Main = () => {
    return (
      <main className='main'>
        <ProfileInfo />
        <MyPosts />
      </main>
    )
}

export default Main;