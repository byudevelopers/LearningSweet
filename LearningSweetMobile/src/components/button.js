import React, { Component, PropTypes } from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class Button extends Component {
  render(){
    return(
      <TouchableHighlight>
        {this.props.children}
      </TouchableHighlight>
    )
  }
}