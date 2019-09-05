import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends Component{
  componentDidMount() {
    fetch('https://www.googleapis.com/books/v1/volumes?q=thealchemist')
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(console.log)
  }
  render(){
    return (
      <div className="Dashboard">
        <header className="App-header">
          <p> Book trading club</p>
         
          <Link to="/users">View Users</Link>
          
          <button onClick={this.props.loadUsers}>Profile</button>
        </header>
      </div>
    );
  }
  
}

export default Dashboard;
