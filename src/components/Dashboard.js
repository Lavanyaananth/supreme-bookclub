import React, {Component} from 'react';
import Users from './Users';
import {Link} from 'react-router-dom';


class Dashboard extends Component{

  render(){
    return (
      <div className="Dashboard">
        <header className="App-header">
          <p> Book trading club</p>
          <Link to="/users">View Users</Link>
        </header>
      </div>
    );
  }
  
}

export default Dashboard;
