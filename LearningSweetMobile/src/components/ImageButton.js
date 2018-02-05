import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Device from '../styles'
import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native'


export default class ImageButton extends Component {

  render(){
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
        activeOpactiy={this.props.activeOpactiy}
        style={this.props.style}>
        <ImageBackground
          source={this.props.imageSource}
          style={this.props.imageBackgroundStyle}>
          <Text
            style={this.props.textStyle}>
            {this.props.textValue}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

}
