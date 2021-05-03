
export const fetchCanvasesSuccess = canvases => ({type: "CANVASES_FETCH_SUCCESS", payload: canvases})
export const fetchCanvasesError = error => ({type: "CANVASES_FETCH_ERROR", payload: error})

export const fetchCanvasesStart = () => {
  return (dispatch) => {
    dispatch({type: "CANVASES_FETCH_START"})

    fetch("http://localhost:3000/canvases")
    .then(res => res.json())
    .then(data => {
      dispatch(fetchCanvasesSuccess(data))
    })
    .catch(error => {
      dispatch(fetchCanvasesError(error))
    })
  }
}