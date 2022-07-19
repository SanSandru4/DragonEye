import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';


const App = (props) => {

  // let propsApp = props.stateApp;

  return (
      <div className='app__wrapper'>
        <Header />
        <Navigation />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/' render = { () => <Main posts = { props.stateApp.postData }/> } />
            <Route path='/profile' render = { () => <Main posts = { props.stateApp.postData}/> } />
            <Route path='/messages' render = { () => <Dialogs 
                                                  dialogs = { props.stateApp.dialogsData } 
                                                  messages = { props.stateApp.messagesData } /> 
                                              } />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
