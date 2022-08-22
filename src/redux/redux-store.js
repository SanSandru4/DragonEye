import { combineReducers, legacy_createStore } from 'redux';
import { blogReducer } from './blog-reducer';
import { dialogReducer } from './dialog-reducer';
import { sidebarReducer } from './sidebar-reducer';

let reducers = combineReducers({
    blogPage: blogReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
});

export let store = legacy_createStore(reducers);