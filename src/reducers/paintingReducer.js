const paintingReducer = (
  state = { paintings: [], status: "idle", errors: null },
  action
) => {
  switch(action.type) {
    case "FETCH_PAINTINGS_START":
      return {
        ...state,
        status: "pending"
      }
    case "FETCH_PAINTINGS_SUCCESS":
      return {
        ...state,
        status: "resolved",
        paintings: action.payload
      }
    case "FETCH_PAINTINGS_ERROR":
      return {
        ...state,
        status: "rejected",
        errors: action.payload
      }
    default: 
      return state
  }
}

export default paintingReducer