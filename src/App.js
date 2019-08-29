import React, {Component} from 'react';
import firebase from "firebase/app";
import './css/index.css';
import Login from './components/Login';
import  { firebaseApp } from "./base";


class App extends Component{
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.authHandler({ user });
      }
    });
  }
authHandler = async authData =>{
  console.log(authData);
  this.setState({
    uid: authData.user.uid
  });
}
authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
  }
 
  logout = async () => {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };
  
  render(){
    const logout = <button onClick={this.logout}>Log Out!</button>;
    return (
      <div className="App">
      <Login authenticate={this.authenticate}/>
      {logout}
      </div>
    );
  }
  
}

export default App;
