import React from 'react';
import { Link } from 'react-router-dom'
import styles from './PaintingFilter.module.css'

const PaintingFilter = ({fetch, currentQuery}) => {
  
  const filters = ["Newest", "Oldest", "Random"]

  return (
    <div className={styles.container}>
      <span className={styles.cta}>Change the pattern: </span>
      {filters.map(filter => {
        const filterLowercase = filter.toLowerCase()
        return (
          <Link
            className={currentQuery === filterLowercase ? styles.activeFilter : styles.filter}
            to={`/gallery?q=${filterLowercase}&page=1`}
            onClick={() => fetch(filterLowercase)}>{filter}
            
          </Link>
        )
      })}
    </div>
  )
}

export default PaintingFilter