export const startPainting = canvasPolygons => {
  return {type: "NEW_PAINTING", payload: canvasPolygons}
} 

export const addColor = (polygonId, hexcode) => {
  return {type: "ADD_COLOR", id: polygonId, hexcode: hexcode}
} 