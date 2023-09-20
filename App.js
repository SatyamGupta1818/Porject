import React from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const App = () => {
  const [show , setShow] = useState(false)
  return (
    <View style={styles.container}>
      {
        show? <View style={styles.modal}>
        <View style={styles.body}>
        <Button title="Close Button" onPress={()=>setShow(false)} />
        </View>
      </View> : null
      }
      <Button title="Open Dialog" onPress={()=>setShow(true)} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center'
  },
  modal:{
    backgroundColor:'#999',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  body:{
  width:300,
  height:300,
  backgroundColor:'#fff',
  justifyContent:'flex-end',
  padding:20,
  borderRadius:10
  }
})

export default App