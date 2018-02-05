import { connect } from 'react-redux'
import store from '../store/store'
import { netIdEntered, passwordEntered } from '../actions/login'
import LoginRoute from './LoginRoute'

const mapStateToProps = state => ({
  netID: state.loginReducer.netID,
  password: state.loginReducer.password
})

const mapDispatchToProps = dispatch => ({
  netIdEntered: () => dispatch(netIdEntered()),
  passwordEntered: () => dispatch(passwordEntered())
})

const LoginRouteContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRoute)

export default LoginRouteContainer
