const studioReducer = (
  state = { studioCanvas: [], status: "idle", errors: null },
  action
) => {
  switch(action.type) {
    case "NEW_PAINTING":
      const colors = action.payload.map(polygon => {
        return {
          ...polygon,
          color: "#fff"
        }
      })
      return {
        ...state,
        studioCanvas: colors
      }
    case "ADD_COLOR":
      console.log("hit add color")
      const updatedCanvas = state.studioCanvas.map(polygon => {
        if (polygon.id === action.id) {
          return {...polygon, color: action.hexcode}
        } else {
          return polygon
        }
      })
      return {
        ...state,
        studioCanvas: updatedCanvas
      }
    default:
      return state
  }
}

export default studioReducer