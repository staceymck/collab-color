import React from 'react';

const Polygon = ({points, id, fill}) => {
  return (
    <polygon id={id} key={id} points={points} fill={fill} stroke="#231f20" strokeLinejoin="round" strokeWidth="0.25px" />
  )
}

export default Polygon