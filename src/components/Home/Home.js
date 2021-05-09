import React from 'react';
import { Link } from 'react-router-dom';
import artSample from '../../assets/art-sample.svg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.row}>
      <div className={styles.column}>
      <h1>collab color</h1>
      <p>
        Join in a collective artwork through this click-to-color app. 
        Choose from one of three designs as your base, add colors, then
        contribute your tile to the constantly evolving gallery wall.
      </p>
      <p>
        You can align your colors with the tiles already present or work with a unique color scheme. 
      </p>
      <p>
        Tiles are displayed newest to oldest in the gallery, but you can create new patterns through
        the sorting options. Thanks for co-creating!
      </p>
      <Link to="/gallery" className="button-primary">View the gallery</Link>
      </div>
      <div className={styles.column}>
        <img src={artSample} alt="Grid of 9 squares, each composed of colorful triangles" />
      </div>
    </div>
  )
}

export default Home