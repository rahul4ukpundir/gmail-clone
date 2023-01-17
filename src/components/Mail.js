import { ArrowBack, CheckCircle,
  Error, Delete, Print,
  ExitToApp, LabelImportant, MoreVert, MoveToInbox, UnfoldMore } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import "./Mail.css";
import React from 'react'

const Mail = () => {
  return (
    <div className='mail'>
      <div className='mail__header'>
        <div className='mail__header__left'>
          <Link to="/">
            <ArrowBack />
          </Link>
          <MoveToInbox />
          <Error />
          <Delete />
          <CheckCircle />
          <LabelImportant />
          <MoreVert />
        </div>
        <div className='mail__header__right'></div>
          <UnfoldMore />
          <Print />
          <ExitToApp />
      </div>
      <div className='mail_body'>
         <div className='mail_body_header'>
           <h4>Business Loan without CreditScore</h4>
           <LabelImportant />
           <label>Inbox</label>
         </div>
      </div>
       
    </div>
  )
}

export default Mail
