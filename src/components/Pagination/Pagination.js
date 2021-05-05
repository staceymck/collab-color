import React from 'react';

const Pagination = ({current, total, fetch, currentQuery}) => {
  return (
    <div>
      {current !== 1 && <p onClick={() => fetch(currentQuery, parseInt(current - 1))}>Previous</p> }
      {current === total && <p onClick={() => fetch(currentQuery, parseInt(current + 1))}>Next</p> }
    </div>
  )
}

export default Pagination