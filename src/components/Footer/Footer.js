import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import linkStyles from '../../links.css';

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