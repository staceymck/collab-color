import React from 'react';

const Polygon = ({points, id, fill, strokeWidth, onClick}) => {
  return (
    <polygon
      id={id}
      key={id}
      points={points}
      fill={fill} stroke="#231f20"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      onClick={onClick}
    />
  )
}

export default Polygon