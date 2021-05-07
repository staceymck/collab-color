import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Pagination.module.css'

const Pagination = ({current, total, fetch, currentQuery}) => {

  const prevPath = () => {
    if (currentQuery) {
      return `/gallery?q=${currentQuery}&page=${parseInt(current - 1)}`
    } else {
      return `/gallery?page=${parseInt(current - 1)}`
    }
  }

  const nextPath = () => {
    if (currentQuery) {
      return `/gallery?q=${currentQuery}&page=${parseInt(current + 1)}`
    } else {
      return `/gallery?page=${parseInt(current + 1)}`
    }
  }

  return (
    <div className={styles.container}>
      {current !== 1 &&
        <Link to={prevPath()} className={styles.pageLink} onClick={() => fetch(currentQuery, parseInt(current - 1))}>
          Previous
        </Link> 
      }
      {current !== total &&
        <Link to={nextPath()} className={styles.pageLink} onClick={() => fetch(currentQuery, parseInt(current + 1))}>
          Next
        </Link>
      }
    </div>
  )
}

export default Pagination