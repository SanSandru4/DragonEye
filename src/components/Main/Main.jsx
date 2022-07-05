import React from "react";
import './Main.css';
import MyPosts from "./MyPosts/MyPosts";

const Main = () => {
    return (
        <main className='main'>
        <div>
          <img className='main__image' src='https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=pexels-pixabay-414102.jpg&fm=jpg' alt=''/>
        </div>
        <div>
          ava+description
        </div>
        <MyPosts />
      </main>
    )
}

export default Main;