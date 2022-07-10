import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
      <div className='app__wrapper'>
        <Header />
        <Navigation />
        <div className='app__wrapper-content'>
          <Routes>
            <Route path='/' element={ <Main /> } />
            <Route path='/profile' element={ <Main /> } />
            <Route path='/massages' element={ <Dialogs /> } />
          </Routes>
        </div>
        <Footer />
      </div>
  );
}

export default App;
