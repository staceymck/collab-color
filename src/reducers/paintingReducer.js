const paintingReducer = (
  state = { paintings: [], status: "idle", error: null, query: "", currentPage: 1, totalPages: 1 },
  action
) => {
  switch(action.type) {
    case "FETCH_PAINTINGS_START":
      return {
        ...state,
        error: null,
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
        error: action.error
      }
    case "SET_PAGINATION":
      return {
        ...state,
        currentPage: action.currentPage,
        totalPages: action.totalPages
      }
    case "SET_SORT_QUERY":
      return {
        ...state,
        query: action.query
      }
    default: 
      return state
  }
}

export default paintingReducer