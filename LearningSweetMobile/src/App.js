/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux'
import { LoginRoute }  from './routes'
import store from './store/store'
import { Modal, Text } from 'react-native'

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

/**
    <LoginTextField
      onChangeText={userTextEntered}
      placeholder={'Net ID'}
    />
    <Image
      source={require('./assets/images/byuLogo.png')}
    />

    **/
    /**
    <Modal
          animationType={'slide'}
          transparent={false}
          visible={false}>
          <Text>Hello World!</Text>
        </Modal>
    **/
export default class App extends Component {
  render(){
    return(
      <Provider store={store}>
        <LoginRoute />
      </Provider>
    )
  }
}
