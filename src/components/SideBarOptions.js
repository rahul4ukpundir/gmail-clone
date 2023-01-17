import React from 'react';
import "./SideBarOptions.css"

const SideBarOptions = ({title, Icon, number, selected}) => {
  return (
    <div className={`sideBarOptions ${selected && 'sidebar__active'}`}>
      <Icon />
      <label>{title}</label>
      <p>{number}</p>
    </div>
  )
}

export default SideBarOptions
