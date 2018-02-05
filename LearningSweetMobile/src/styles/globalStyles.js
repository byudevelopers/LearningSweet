import { Dimensions, StyleSheet } from 'react-native'


export const Device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
    //backgroundColor: '#F5FCFF'
  },
  horizontalContainer:{
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row'
  }
})

export default styles
