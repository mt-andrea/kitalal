import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const Input = (props) => {
  return (
      <TextInput
      style={styles.input}
      {...props} />
  )
}

export default Input

const styles = StyleSheet.create({
input:{
height:30,
width:50,
borderBottomColor:'grey',
borderBottomWidth:1,
marginBottom:20,
marginTop:20,
textAlign:'center'
}
});
