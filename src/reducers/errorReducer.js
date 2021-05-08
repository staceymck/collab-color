const errorReducer = (
  state = {error: null, isOpen: false},
  action
) => {
  const { error } = action;
 
  if(error) {
    console.log(error + " show")
    return {
      error: error, //how do the errors come back? could I have more than one?
      isOpen: true
    }
  } else if(action.type === "HIDE_ERROR") {
    console.log("hide")
    return {
      error: null,
      isOpen: false
    }
  }
  return state;
 }

 export default errorReducer