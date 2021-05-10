const errorReducer = (
  state = {error: null, isOpen: false},
  action
) => {
  const { error } = action;
 
  if(error) {
    return {
      error: error,
      isOpen: true
    }
  } else if(action.type === "HIDE_ERROR") {
    return {
      error: null,
      isOpen: false
    }
  }
  return state;
 }

 export default errorReducer