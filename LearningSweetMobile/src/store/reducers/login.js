import { NET_ID_ENTERED, PASSWORD_ENTERED } from '../../actions/types'


const initialState = {
  password: 'INIT'
  netID: 'INIT'
}

function loginReducer(state, action){

  if (state === undefined){
    return initialState
  }

  switch(action.type){
    case NET_ID_ENTERED:
      return {
        netID: action.netID
      }
    case PASSWORD_ENTERED:
      return {
        password: action.password
      }
    default:
      return state
      // Do nothing...
  }
}

export default loginReducer
