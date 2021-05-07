export const fetchCanvasesSuccess = canvases => ({type: "FETCH_CANVASES_SUCCESS", payload: canvases})
export const fetchCanvasesError = error => ({type: "FETCH_CANVASES_ERROR", error: error})

export const fetchCanvasesStart = () => {
  return (dispatch) => {
    dispatch({type: "FETCH_CANVASES_START"})

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