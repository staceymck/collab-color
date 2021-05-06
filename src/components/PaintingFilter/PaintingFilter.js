import React from 'react';
import { Link } from 'react-router-dom'
import styles from './PaintingFilter.module.css'


const PaintingFilter = ({fetch}) => {
  
  const filters = ["Newest", "Oldest", "Random"]

  return (
    <div>
      Change the pattern: 
      {filters.map(filter => {
        const filterLowercase = filter.toLowerCase()
        return (
          <Link
            to={`/gallery?q=${filterLowercase}&page=1`}
            onClick={() => fetch(filterLowercase)}>{filter}
          </Link>
        )
      })}
    </div>
  )
}

export default PaintingFilter