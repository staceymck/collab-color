import React from 'react';
import Canvas from '../Canvas/Canvas'

const CanvasList = ({canvases}) => {
  return (
    <div>
      <h1>Select a canvas</h1>
      {canvases.map(c => <Canvas key={c.id} id={c.id} polygons={c.polygons} />)}
    </div>
  )
}

export default CanvasList