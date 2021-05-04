import React from 'react';
import Canvas from '../Canvas/Canvas';
import styles from './StudioPage.module.css';
import { SketchPicker } from 'react-color';

const StudioPage = ({canvas}) => {
  return (
    <div>
      <Canvas 
        key={canvas.id}
        id={canvas.id}
        polygons={canvas.polygons}
        // cardStyles={add style}
      />
      <SketchPicker />
    </div>
  )
}

export default StudioPage