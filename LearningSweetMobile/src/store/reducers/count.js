const initialState = {
  count: 0
}

function countReducer(state, action){

  if (state === undefined){
    return initialState
  }

  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + 1
      }
    case 'DECREMENT':
      return {
        count: state.count - 1
      }
    case 'ZERO':
      return {
        count: 0
      }
    default:
      return state
  }
}

export default countReducer
