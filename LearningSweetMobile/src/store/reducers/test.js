
const initialState = {
  count: 0
}

function testReducer(state, action){

  if (state === undefined){
    return initialState
  }

  switch(action.type){
    case 'TEST':
      return {
        count: state.count + 100
      }
    case 'ZERO':
      return {
        count: 0
      }
    default:
      return state
      // Do nothing...
  }
}


export default testReducer
