import React, {Component} from 'react';
import firebase from "firebase/app";
import PropTypes from "prop-types";
import './css/index.css';
import Login from './components/Login';
import Userslist from "./components/Userslist";
import  { firebaseApp } from "./base";
import Dashboard from './components/Dashboard';


class App extends Component{
  
  static propTypes = {
    loadUsers: PropTypes.func,
    userdetails: PropTypes.object
  };
  state = {
    uid: null,
    owner: null,
    users :{}
  };

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
    uid: authData.user.uid,
    owner: authData.user.uid
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
  
  loadUsers = () => {
    alert("ya");
    this.setState({users: Userslist});
  };

  render(){
    const logout = <button onClick={this.logout}>Log Out!</button>;
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }
    return (
      <div className="App">
      <Dashboard loadUsers={this.loadUsers}></Dashboard>
      {logout}
      </div>
    );
  }
  
}

export default App;
