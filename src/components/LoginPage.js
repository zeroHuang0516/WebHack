'use strict';
import ReactDOM from 'react-dom';
import  FacebookLogin  from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import React, { Component } from 'react';
import Avatar from 'react-avatar';
let responseGoogleId='';
let responseFacebookId='';
const responseGoogle = (response) => {
	responseGoogleId = response.googleId;
  	//console.log(response);
}
const responseFacebook = (response) => {
	responseFacebookId = response.socialId;
	//console.log(response);
}

class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			InputUsrName: '',
			InputPassWord: '',
			TypoName:undefined,
			TypoPassWord:undefined,

		}
	}

	render(){
		return(
	<div className="container">
    <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
            <legend className="legend">Login</legend>
            <div className="account-wall">
            	<img className="profile-img" src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=120"
                    alt=""/>
                <form className="form-signin">

              <div className="haha">
        			<form action="#/chatroom" className="form-btn">
              <FacebookLogin cssClass="loginBtn loginBtn--facebook"
        				                        appId="146794555798351"
        				                        buttonText="Log in With Facebook"
                                        language="en_US"
                                        scope="public_profile,email"
                                        xfbml={false}
                                        version="v2.5"
                                        />
              
      				</form>
              </div>
              <div className="haha">
                   	<form action="#/chatroom" className="form-btn">
                    <GoogleLogin className="loginBtn loginBtn--google"
    					                   clientId="169071539559-a8h5l5lrmam6uu6lg4sfon8burpalp3n.apps.googleusercontent.com"
    					                   buttonText="Login with Google"
    					                   onSuccess={responseGoogle}
    					                   onFailure={responseGoogle}
  						                  />
  					         </form>
              </div>  	

                <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                </form>
            </div>
            
        </div>
    </div>
</div>

	);
	}
}

export default LoginPage;

