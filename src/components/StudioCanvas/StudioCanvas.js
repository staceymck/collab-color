import React from 'react';
import Polygon from '../Polygon/Polygon'

const StudioCanvas = ({polygons, cardStyles, onClick}) => {
  return (
    <div className={cardStyles}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612.25 612.25">
        {polygons.map(p => {
            return (
              <Polygon
                key={p.id}
                id={p.id}
                points={p.points}
                fill={p.color || "#fff"}
                strokeWidth="0.25px"
                onClick={() => onClick(p.id, "#E6E6FA")  }
              />
            )
          })}
      </svg>
    </div>
  )
}
//do I want the onClick="" prop here or just default it in the polygon component if value not passed?


export default StudioCanvas