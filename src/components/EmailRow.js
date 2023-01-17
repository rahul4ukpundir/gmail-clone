import React from 'react'
import { ArrowDropDown, Check, CheckBox, ChevronLeft, KeyboardHide, LabelImportantOutlined, MoreVert, Redo, Settings, StarBorderOutlined } from '@material-ui/icons';
import "./EmailRow.css";
import { useNavigate, useNavigation } from 'react-router-dom';
import { Checkbox } from '@material-ui/core';

const EmailRow = ({title, description, time}) => {
    const navigation = useNavigate();
    return (
        <div className='emailRow' onClick={()=> navigation("/mail")}>
              <Checkbox className='marginright20'/>
                <StarBorderOutlined className='marginright20' />
                <LabelImportantOutlined className='marginright20'/>
            <div className='emailList__title'>
                <label>{title}</label>
            </div>
            <div className='emailList__description'>
                <label>{description}</label>
            </div>
            <div className='emailList__time'>
                <label>{time}</label>
            </div>
        </div>
    )
}

export default EmailRow
