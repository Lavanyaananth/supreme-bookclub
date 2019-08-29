import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import propTypes from "prop-types";
import firebase from "firebase";
import './css/index.css';
import Login from './components/Login';
import base, { firebaseApp } from "./base";


class App extends Component{

authHandler = async authData =>{
  console.log(authData);
}
authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
  }

 
  render(){
    return (
      <div className="App">
      <Login authenticate={this.authenticate}/>
     
      </div>
    );
  }
  
}

export default App;
