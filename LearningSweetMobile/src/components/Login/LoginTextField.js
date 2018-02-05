import React, { Component } from 'react'
import {
  StyleSheet,
  TextInput,
  View,
  Image } from 'react-native'
import GlobalStyles, { Device } from '../../styles'

export default class LoginTextField extends Component {

  render() {
    return (
      <View style={[this.props.style]}>
        <View style={[GlobalStyles.horizontalContainer, styles.topSection]}>
          <Image source={this.props.image}/>
          <TextInput
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            placeholder={this.props.placeholder}
            style={[styles.input, {fontSize: this.props.fontSize}]}
            placeholderTextColor={this.props.placeholderTextColor}
            spellCheck={false}
            autoCorrect={false}
            secureTextEntry={this.props.secureTextEntry}
          />
        </View>
        <View style={styles.line}/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: '100%'
  },
  topSection:{
    paddingBottom: Device.height * .02,
    justifyContent: 'flex-start'
  },
  input: {
    flex: 1,
    borderWidth: 0,
    paddingLeft: Device.width * .05,
    color: '#E0DBDB'
  }
})
