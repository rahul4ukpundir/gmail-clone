import React, { useEffect } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom"
import './App.css';
import EmailList from './components/EmailList';
import Mail from './components/Mail';
import SendEmail from './components/SendEmail';
import { isEmailBoxOpen } from "./features/emailReducer";
import { useSelector } from 'react-redux';
import Login from './Login';
import { loggedUserDetails } from './features/userReducer';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userReducer';

function App() {
  const emailBoxOpen = useSelector(isEmailBoxOpen)
  const userDetails = useSelector(loggedUserDetails);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(user =>{
      if(user){
        dispatch(login({
          name: user?.displayName,
          email: user?.email,
          photoURL: user?.photoURL
      }))
      }
    })

  }, [])
  return (
    <>
      {
        (userDetails ?
          <BrowserRouter>
            <div className="app">
              <Header userDetails ={userDetails}/>
              <div className='app__body'>
                <SideBar />

                <Routes>
                  <Route path="/" element={<EmailList />}> </Route>
                  <Route path="/mail" element={<Mail />}> </Route>
                </Routes>
              </div>
              {emailBoxOpen && <SendEmail />}
            </div>
          </BrowserRouter>
          : <Login />)
      }
    </>

  );
}

export default App;
