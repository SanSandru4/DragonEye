import reportWebVitals from './reportWebVitals';
import { rerenderingEntireTree } from './render'
import { state } from './redux/state'

rerenderingEntireTree(state);

reportWebVitals();

