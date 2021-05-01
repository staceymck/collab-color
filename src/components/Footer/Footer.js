import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.module.css'; //don't need to namespace because styles only applied to HTML elements, no classnames to separate

const Footer = () => {
  return (
    <footer>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="https://github.com/staceymck/collab-color">GitHub Repo</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer