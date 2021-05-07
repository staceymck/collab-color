import React from 'react';
import Polygon from '../Polygon/Polygon'

const Canvas = ({polygons, cardStyles, strokeWidth, onClick, activeColor}) => {

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
                strokeWidth={strokeWidth || "0.25px"}
                onClick={onClick ? () => onClick(p.id, activeColor) : null}
              />
            )
          })}
      </svg>
    </div>
  )
}

export default Canvas