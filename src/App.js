import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
// import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
  return (
      <div className='app__wrapper'>
        <Header />
        <Navigation />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/' element = { <Main store = { props.store } /> }
            />
            <Route path='/profile' element = { <Main store = { props.store }/> }
            />
            <Route path='/messages' element = { <DialogsContainer store = { props.store } /> } />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
