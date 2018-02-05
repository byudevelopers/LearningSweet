
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal
} from 'react-native';

/**

<View style={styles.container}>
    <Text style={styles.appName}>
      React-redux Practice
    </Text>
    <Text style={styles.tally}>
      Tally: {props.count}
    </Text>
    <Text style={styles.tally}>
      Test: {props.testCount}
    </Text>
    <TouchableOpacity onPress={props.increment} style={styles.button}>
      <Text style={styles.buttonText}>
        +
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.decrement} style={styles.button}>
      <Text style={styles.buttonText}>
        -
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.zero} style={styles.button}>
      <Text style={styles.buttonText}>
        0
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={props.test} style={styles.button}>
      <Text style={styles.buttonText}>
        +100
      </Text>
    </TouchableOpacity>
  </View>
**/

const TestComponent = (props) => (
  <ImageBackground
    style={styles.container}
    source={require('../assets/images/byuCampus.png')}
  >
    <View
      style={styles.container}
      backgroundColor={'#002C6D50'}
    >
      <Image
        source={require('../assets/images/byuLogo.png')}
      />
    </View>

  </ImageBackground>


)


TestComponent.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  zero: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
    //backgroundColor: '#F5FCFF'
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  tally: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 20,
    fontSize: 25
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
})

export default TestComponent;
