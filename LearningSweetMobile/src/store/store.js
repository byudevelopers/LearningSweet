import { combineReducers, createStore } from 'redux'
import testReducer from './reducers/test'
import countReducer from './reducers/count'


const reducer = combineReducers({
  testReducer,
  countReducer
})

export default createStore(reducer)
