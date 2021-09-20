import React from 'react';
import s from './sidebar.module.css'



const Sidebar = (props) => {

    return (
        <div className={s.friendsList}> 
           <div className={s.icon}> <img src={props.image} alt="icon" /></div>
           <span>{props.name}</span>
        </div>
    )
};

export default Sidebar;