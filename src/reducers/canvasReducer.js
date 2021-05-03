const canvasReducer = (
  state = { canvases: [], status: "idle", errors: null },
  action
) => {
  switch(action.type) {
    case "FETCH_CANVASES_START":
      return {
        ...state,
        status: "pending"
      }
    case "FETCH_CANVASES_SUCCESS":
      return {
        ...state,
        status: "resolved",
        canvases: action.payload
      }
    case "FETCH_CANVASES_ERROR":
      return {
        ...state,
        status: "rejected",
        errors: action.payload
      }
    default: 
      return state
  }
}

export default canvasReducer