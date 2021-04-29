import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import linkStyles from '../../links.css'

const Navbar = () => {
  return (
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/gallery" activeClassName={styles.active}>Gallery</NavLink>
          </li>
          <li className={styles.li}>
            <NavLink to="/color" activeClassName={styles.active}>Color a tile</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar