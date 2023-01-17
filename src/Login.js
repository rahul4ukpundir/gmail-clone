import React from 'react';
import GmailLogo from "./images/gmailLogo.png";
import { Button } from '@material-ui/core';
import { signInWithGoogle } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userReducer';
import { signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { auth, provider } from './firebase';
import "./Login.css";

const Login = () => {
    const dispatch = useDispatch();

    const SignInWithGoogle =() =>{
        signInWithPopup(auth, provider)
        .then((result) => {
          debugger;
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          // The signed-in user info.
          dispatch(login({
            name: user?.displayName,
            email: user?.email,
            photoURL: user?.photoURL
        }))
         
          // ...
        }).catch((error) => {
          debugger
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
      
    }
  return (
    <div className='login'>
        <div className='login__container'>
        <img src= {GmailLogo} ></img>
          <Button className='Primary' color='primary' onClick={SignInWithGoogle}>Login</Button>
        </div>
    
    </div>
  )
}

export default Login
