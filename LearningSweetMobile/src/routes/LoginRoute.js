import React, { Component }from 'react'
import {
  StyleSheet,
  ImageBackground,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  Keyboard } from 'react-native'

import Strings from '../strings'
import GlobalStyles, { Device } from '../styles'
import { LoginTextField } from '../components/Login'
import { ImageButton } from '../components'
import { netIdEntered, passwordEntered } from '../actions/login'

console.log(Device.height)

const fontSize = 20
const fieldWidth = '80%'
const buttonWidth = '82.5%'

export default class LoginRoute extends Component {

  signInPressed = () => {
    console.log('sign in pressed!')
  }

  render(){
    return(
      <ImageBackground
        style={GlobalStyles.container}
        source={require('../assets/images/byuCampus.png')}
      >
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          accessible={false}>
          <View
            style={{flex: 1, alignItems:'center', width: '100%'}}
            backgroundColor={colors.backgroundColor}>
            <View style={styles.imageContainer}>
              <Image source={require('../assets/images/byuLogo.png')}/>
            </View>
            <LoginTextField
              placeholder={Strings.NET_ID_PLACEHOLDER}
              value={this.props.netID}
              onChangeText={this.props.netIdEntered}
              style={styles.textField}
              placeholderTextColor={colors.placeholderTextColor}
              fontSize={fontSize}
              image={require('../assets/images/personIcon.png')}/>
            <LoginTextField
              placeholder={Strings.PASSWORD_PLACEHOLDER}
              value={this.props.password}
              onChangeText={this.props.passwordEntered}
              style={styles.textField}
              placeholderTextColor={colors.placeholderTextColor}
              fontSize={fontSize}
              secureTextEntry={true}
              image={require('../assets/images/lockIcon.png')}/>
            <ImageButton
              onPress={this.signInPressed}
              activeOpactiy={0.9}
              style={styles.button}
              imageBackgroundStyle={GlobalStyles.container}
              imageSource={require('../assets/images/loginButtonBackground.png')}
              textValue={'Sign In'}
              textStyle={styles.buttonText}/>
          </View>
        </TouchableWithoutFeedback>
      </ImageBackground>
    )
  }
}

const colors = {
  placeholderTextColor: '#B6B5B4',
  backgroundColor: '#002C6D95'
}

const styles = StyleSheet.create({
  textField: {
    width: fieldWidth,
    paddingBottom: Device.height * .05
  },
  button: {
    width: buttonWidth,
    height: Device.height * 0.08
  },
  buttonText: {
    color: 'white',
    fontSize: fontSize
  },
  imageContainer: {
    paddingTop: Device.height * .16,
    paddingBottom: Device.height * .05,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
