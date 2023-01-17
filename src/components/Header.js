
import { Avatar, IconButton } from '@material-ui/core';
import { Apps, Search, Menu, ArrowDownward, ArrowDropDown, Notifications, Settings, QuestionAnswer } from '@material-ui/icons';
import React from 'react';
import gmailLogo from "../images/gmailLogo.png";
import { useDispatch } from 'react-redux';

import "./Header.css";
import { logout } from '../features/userReducer';

const Header = ({userDetails}) => {
    const {name, email, photoURL } = userDetails;
    const dispatch = useDispatch();
    const logoutMe = () =>{
        dispatch(logout(null))
    }
    return (
        <div className='app__header'>
            <div className='app__header__left'>
                <Menu />
                <img src={gmailLogo} />
            </div>
            <div className='app__header__center'>
                <Search />
                <input />
                <ArrowDropDown />
            </div>
            <div className='app__header__right'>
                <IconButton>
                    <Notifications />
                </IconButton>
                <IconButton>
                    <Settings />
                </IconButton>
                <IconButton>
                    <Apps />
                </IconButton>

                <Avatar src = {photoURL}/>
                <a  className='logout' href='#' onClick={logoutMe}>Logout</a>
            </div>
        </div>
    )
}

export default Header
