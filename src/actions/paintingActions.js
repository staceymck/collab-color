export const fetchPaintingsSuccess = paintings => ({type: "FETCH_PAINTINGS_SUCCESS", payload: paintings})
export const fetchPaintingsError = error => ({type: "FETCH_PAINTINGS_ERROR", error: error})

export const fetchPaintingsStart = (query = "newest", page = 1) => {
  return (dispatch) => {
    dispatch(setSortQuery(query))
    dispatch({type: "FETCH_PAINTINGS_START"})

    fetch(`${process.env.REACT_APP_API_ENDPOINT}/paintings?q=${query}&page=${page}`)
    .then(res => {
      if (!res.ok) {
        const message = `${res.status}: ${res.statusText}`
        throw new Error(message)
      }
      return res.json()
    })
    .then(data => {
      dispatch(setPagination(data.current, data.total))
      dispatch(fetchPaintingsSuccess(data.paintings))
    })
    .catch(error => {
      dispatch(fetchPaintingsError(error.message))
    })
  }
}

export const setPagination = (current, total) => {
  return {type: "SET_PAGINATION", currentPage: current, totalPages: total}
} 

export const setSortQuery = (query) => {
  return {type: "SET_SORT_QUERY", query: query}
}