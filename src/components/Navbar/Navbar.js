import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'

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