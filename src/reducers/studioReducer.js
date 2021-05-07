// studioCanvas structure: [{id, points, color}]

const studioReducer = (
  state = { studioCanvas: [], status: "idle", error: null },
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
      const updatedCanvas = state.studioCanvas.map(polygon => {
        if (polygon.id === action.id) {
          return {...polygon, color: action.color}
        } else {
          return polygon
        }
      })
      return {
        ...state,
        studioCanvas: updatedCanvas
      }
    case "RESET_CANVAS":
      const blankCanvas = state.studioCanvas.map(polygon => {
        return {...polygon, color: "#fff"}
      })
      return {
        ...state,
        studioCanvas: blankCanvas
      }
    case "CREATE_PAINTING_START":
      return {
        ...state,
        status: "pending"
      }
    case "CREATE_PAINTING_SUCCESS":
      console.log("success")
      return {
        ...state,
        status: "resolved"
      }
    case "CREATE_PAINTING_ERROR":
     return {
       ...state,
       status: "rejected",
       error: action.error
     }
    default:
      return state
  }
}

export default studioReducer