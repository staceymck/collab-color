import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './PaintingList.module.css';

const PaintingList = ({paintings}) => {
  return (
    <div className={styles.grid}>
      {paintings.map(p => <Canvas key={p.id} id={p.id} polygons={p.polygons} cardStyle={styles.card} />)}
    </div>
  )
}

export default PaintingList