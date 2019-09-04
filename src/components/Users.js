import React, {Component} from 'react';
import PropTypes from "prop-types";
class Users extends Component{
  static propTypes = {
    details: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      status: PropTypes.string
    })
  };
  render(){
    
    return (     
        <li>
        <h3>
         
        </h3>
        <p></p>
        <p></p>
      </li> 
    );
  } 
}

export default Users;