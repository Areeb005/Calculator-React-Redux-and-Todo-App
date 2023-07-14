let init = [];

const reducer = (state = init, action) =>{
   
    if(action.type === 'history'){
      return action.payload || state     
    } else {
        return state
    }
}

export default reducer;