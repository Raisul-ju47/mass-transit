import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../App';
import Header from "../Header/Header";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGoogle  } from '@fortawesome/free-brands-svg-icons';
import './Login.css';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); //if already initialized, use that one
}

const Login = () => {
    const [newUser, setNewUser] = useContext(UserContext);


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const {displayName, email} = result.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email
        }
        console.log(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      console.log(error.message);
      });
  };
  const handleLoginBlur = (e) => {
    
    let isFieldValid = true;
    if(e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 4;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if(isFieldValid) {
      const newUserInfo = {...loggedInUser};
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    // console.log(loggedInUser.email, loggedInUser.password)
    if(loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then((res) => {
          const newUserInfo = {...loggedInUser};
          newUserInfo.error = '';
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
          })
        .catch((error) => {
          const newUserInfo = {...loggedInUser};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    e.preventDefault();
  }


  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  };
  return (
    <div>
       <Header/> 
      <div>
        <div className="center login">
          <h1>login</h1>
          <form onSubmit={handleSubmit} method="post">
            <div className="txt-field">
              <input type="text" onBlur={handleLoginBlur} name="name"/>
              <span></span>
              <label>User Name</label>
            </div>
            <div className="txt-field">
              <input type="text" onBlur={handleLoginBlur} name="email" required/>
              <span></span>
              <label>E-mail</label>
            </div>
            <div className="txt-field">
              <input type="password" onBlur={handleLoginBlur} name="password" required/>
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <input type="submit" value="login"/>
            <div className="signup_link">
              Don't have an account? <a href="#">Create an accout</a>
            </div>
          </form>
          
        </div>
        <h2 className="text-center mt-5">or</h2>
        
          <div className="google-btn" onClick={handleGoogleSignIn}><FontAwesomeIcon className="fa-fw" icon={faGoogle} />
              Continue with Google</div>
        
        
      </div>
    </div>
  );
};

export default Login;
