export const fetchPaintingsSuccess = paintings => ({type: "FETCH_PAINTINGS_SUCCESS", payload: paintings})
export const fetchPaintingsError = error => ({type: "FETCH_PAINTINGS_ERROR", payload: error})

export const fetchPaintingsStart = () => {
  return (dispatch) => {
    dispatch({type: "FETCH_PAINTINGS_START"})

    fetch("http://localhost:3000/paintings")
    .then(res => res.json())
    .then(data => {
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