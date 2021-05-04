import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './CanvasList.module.css';
import { Link } from 'react-router-dom';

const CanvasList = ({canvases}) => {
  return (
    <div>
      <h1 className={styles.header}>Select a canvas</h1>
      <div className={styles.row}>
        {canvases.map(c => {
          return (
            <Link to={`/canvases/${c.id}/paintings/new`} className={styles.canvas}> 
              <Canvas 
                key={c.id} 
                id={c.id}
                polygons={c.polygons}
                cardStyles={styles.card} 
                strokeWidth="0.5px"
              />
            </Link>
          )}
        )}
      </div>
    </div>
  )
}

export default CanvasList