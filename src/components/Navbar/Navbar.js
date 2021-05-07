import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import '../../links.css' //importing linkStyles here applies it everywhere on the app because it's global

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/gallery" activeClassName={styles.active}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/canvases" activeClassName={styles.active}>Paint</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar