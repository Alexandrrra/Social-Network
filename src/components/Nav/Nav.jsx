import React from 'react'
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar/sidebar';
import s from './Nav.module.css';

const Navbar = (props) => {

let friendsListElements = props.friends.map(f => <Sidebar name={f.name} id={f.id} image={f.image}/>)

  return (
      <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
        </div>
        <div className={s.sidebar}>
        {friendsListElements}
        </div>
      </nav>
    
  )
}

export default Navbar;