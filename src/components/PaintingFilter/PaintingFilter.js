import React from 'react';
import { Link } from 'react-router-dom'

const PaintingFilter = ({fetch}) => {
  
  return (
    <div>
      Change the pattern: 
      <Link to="/gallery/newest/1" onClick={() => fetch("newest")}>Newest</Link>
      <Link to="/gallery/oldest/1" onClick={() => fetch("oldest")}>Oldest</Link>
      <Link to="/gallery/random/1" onClick={() => fetch("random")}>Random</Link>
    </div>
  )
}

export default PaintingFilter