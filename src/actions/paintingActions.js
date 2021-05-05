export const fetchPaintingsSuccess = paintings => ({type: "FETCH_PAINTINGS_SUCCESS", payload: paintings})
export const fetchPaintingsError = error => ({type: "FETCH_PAINTINGS_ERROR", payload: error})

export const fetchPaintingsStart = (query = "newest", page = 1) => {
  return (dispatch) => {
    dispatch(setSortQuery(query))
    dispatch({type: "FETCH_PAINTINGS_START"})

    fetch(`http://localhost:3000/paintings?q=${query}&page=${page}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.paintings)
      dispatch(setPagination(data.current, data.total))
      dispatch(fetchPaintingsSuccess(data.paintings))
    })
    .catch(error => {
      dispatch(fetchPaintingsError(error))
    })
  }
}

export const setPagination = (current, total) => {
  return {type: "SET_PAGINATION", currentPage: current, totalPages: total}
} 

export const setSortQuery = (query) => {
  return {type: "SET_SORT_QUERY", query: query}
}