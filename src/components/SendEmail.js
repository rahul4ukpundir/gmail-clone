import { Button, Popover } from '@material-ui/core';
import { Cancel, Close, ExpandLess, ExpandMore, Minimize } from '@material-ui/icons';
import React from 'react';
import { offEmailBox } from '../features/emailReducer';
import { useDispatch } from 'react-redux';
import "./SendEmail.css";

const SendEmail = () => {
    const dispatch = useDispatch();
    return (
        <div className='sendEmail'>
            <div className='sendEmail__header'>
                <label>New Message</label>
                <Minimize />
                <ExpandMore />
                <span className='cancel__btn'  onClick={()=> dispatch(offEmailBox())}><Close /></span>
            </div>
            <form>
                <input  placeholder='Receipients'/>
                <input  placeholder='Subject'/>
                <textarea className='multi_line_textbox'  placeholder='Message'></textarea>
                <div className='sendEmail_footer'>
                <input type ="submit" className='btn-submit' value="Submit"></input>
                </div>
            </form>
        </div>
    )
}

export default SendEmail
