/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import TestComponent from './components/TestComponentContainer'
import { Provider } from 'react-redux'

import store from './store/store'
import { increment, decrement, zero } from './actions/test'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = () => (
  <Provider store={store}>
    <TestComponent />
  </Provider>

)

export default App
