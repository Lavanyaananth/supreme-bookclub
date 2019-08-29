import React from 'react';
import propTypes from  'prop-types';

const Login = props => (
<div className="Login">
            <h1 className="hero-login-text">SUPREME BOOK CLUB</h1>
            <span className="sub-line">Login to start trading books</span>
            <button className="github" onClick={() => props.authenticate("Github")}>
                Login with Github
            </button>
            <button className="facebook" onClick={() => props.authenticate("Facebook")}>
                Login with Facebook
            </button>
            <button className="twitter" onClick={() => props.authenticate("Twitter")}>
                Login with Twitter
            </button>
           
        </div>
);

Login.propTypes = {
    authenticate: propTypes.func.isRequired
}  


export default Login;