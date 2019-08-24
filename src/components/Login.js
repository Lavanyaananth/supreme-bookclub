import React from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class Login extends React.Component{
    render(){
        const responseFacebook = (response) => {
            console.log(response);
        }
      
        const responseGoogle = (response) => {
            console.log(response);
        }
        return(
        
        <div className="Login">
            <h1 className="hero-login-text">SUPREME BOOK CLUB</h1>
            <span className="sub-line">Login to start trading books</span>
            <React.Fragment>

                {/* Facebook oAuth */}
                <FacebookLogin className="FacebookLogin"
                    appId="2386668281590373" 
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
                {/* Google oAuth */}
                <GoogleLogin className="GoogleLogin"
                    clientId="137259897562-3458blcq83t467nelj0r6vjcb9q7tojt.apps.googleusercontent.com" 
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </React.Fragment>
        </div>);
    }
}
export default Login;