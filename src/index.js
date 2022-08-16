import reportWebVitals from './reportWebVitals';
import { store } from './redux/state'
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderingEntireTree = (state) => {
  root.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state = { state } 
             dispatch = { store.dispatch.bind(store) } 
             store = { store }/>
      </React.StrictMode>
    </BrowserRouter>
  );  
}


rerenderingEntireTree(store.getState());

store.subscribe(rerenderingEntireTree);

reportWebVitals();

