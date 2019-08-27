import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import Router from './components/Router';
import './css/index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
console.log("test app");
render(<Router/>, document.querySelector('#root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
