import React, {Component} from 'react';
import PropTypes from "prop-types";
class Users extends Component{
  static propTypes = {
    details: PropTypes.shape({
      email: PropTypes.string,
      name: PropTypes.string,
      status: PropTypes.string
    })
  };
  render(){
    const {email,name,status} = this.props.details;
    return ( 
      <div className="card">
            <p>{name}</p>     
            <p>{email}</p>
            <p>{status}</p> 
      </div>    
  
    );
  } 
}

export default Users;