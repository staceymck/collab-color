import snakeize from 'snakeize'

export const createPaintingSuccess = () => ({type: "CREATE_PAINTING_SUCCESS"})
export const createPaintingError = error => ({type: "CREATE_PAINTING_ERROR", payload: error})

export const createPaintingStart = (canvasId, studioCanvas) => {
  return (dispatch) => {
    dispatch({type: "CREATE_PAINTING_START"})

    const polys = studioCanvas.map(poly => {
      return ({polygonId: poly.id, color: poly.color})
    })
    const finishedPainting = {painting: {canvasId: canvasId, coloredPolygonsAttributes: polys}}

    const configObj = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(snakeize(finishedPainting))
    }

    fetch("http://localhost:3000/paintings", configObj)
    .then(res => res.json())
    .then(data => { //can I display success message after the .then or do I need to wait until this step?
      dispatch(createPaintingSuccess()) //display success message
    })
    .catch(error => {
      dispatch(createPaintingError(error)) //display error message
    })
  }
}

export const newPainting = canvasPolygons => {
  return {type: "NEW_PAINTING", payload: canvasPolygons}
} 

export const addColor = (polygonId, hexcode) => {
  return {type: "ADD_COLOR", id: polygonId, color: hexcode}
} 

export const resetCanvas = () => {
  return {type: "RESET_CANVAS"}
}

