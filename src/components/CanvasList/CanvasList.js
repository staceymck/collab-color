import React from 'react';
import Canvas from '../Canvas/Canvas'
import styles from './CanvasList.module.css'

const CanvasList = ({canvases}) => {
  console.log("canvaslist")
  return (
    <div>
      <h1>Select a canvas</h1>
      <div className={styles.row}>
        {canvases.map(c => <Canvas key={c.id} id={c.id} polygons={c.polygons} cardStyles={styles.card} />)}
      </div>
    </div>
  )
}

export default CanvasList