import { connect } from 'react-redux'
import store from '../store/store'
import { increment, decrement, zero, test } from '../actions/test'
import TestComponent from './TestComponent'

const mapStateToProps = state => ({
  count: state.countReducer.count,
  testCount: state.testReducer.count
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  zero: () => dispatch(zero()),
  test: () => dispatch(test())
})

const TestComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)

export default TestComponentContainer
