export const fetchCanvasesSuccess = canvases => ({type: "FETCH_CANVASES_SUCCESS", payload: canvases})
export const fetchCanvasesError = error => ({type: "FETCH_CANVASES_ERROR", error: error})

export const fetchCanvasesStart = () => {
  return (dispatch) => {
    dispatch({type: "FETCH_CANVASES_START"})

    fetch("http://localhost:3000/canvases")
    .then(res => res.json())
    .then(data => {
      if (res.ok) {
        dispatch(fetchCanvasesSuccess(data))
      } else {
        const message = `${res.status}: ${res.statusText}`
        throw new Error(message)
      }
    })
    .catch(error => {
      dispatch(fetchCanvasesError(error.message))
    })
  }
}