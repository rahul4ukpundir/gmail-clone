import { AccessTime, Add, Category, CategoryRounded, Drafts, ExpandMore, Inbox, LabelImportant, LabelImportantRounded, NearMe, Note, Send, Snooze, Star } from '@material-ui/icons';
import React from 'react'
import SideBarOptions from './SideBarOptions';
import { useDispatch } from 'react-redux';
import { offEmailBox, onEmailBox } from "../features/emailReducer"
import "./SideBar.css";

const SideBar = () => {
  const dispatch = useDispatch();
  return (
    <div className='sideBar'>
     <div className='sideBar_compose_button' onClick={()=>dispatch(onEmailBox())}>
        <Add />
        <h3>Compose</h3>
     </div>
     <SideBarOptions title ="Inbox" Icon ={Inbox} number ={54} selected ={true}/>
     <SideBarOptions title ="Starred" Icon ={Star} />
     <SideBarOptions title ="Snoozed" Icon ={AccessTime} />
     <SideBarOptions title ="Important" Icon ={LabelImportant} />
     <SideBarOptions title ="Sent" Icon ={NearMe} />
     <SideBarOptions title ="Draft" Icon ={Note} />
     <SideBarOptions title ="Categories" Icon ={Category} />
     <SideBarOptions title ="More" Icon ={ExpandMore} />
    </div>
  )
}

export default SideBar
