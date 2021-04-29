import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <nav>
        <ul>
          <li>
            <NavLink to="/gallery" activeClassName={"link-active"}>Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/color" activeClassName={"link-active"}>Color a tile</NavLink>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar