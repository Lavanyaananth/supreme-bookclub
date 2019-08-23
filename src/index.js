import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import './css/index.css';
import Login from './components/Login'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
console.log("test app");
render(<Login/>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
