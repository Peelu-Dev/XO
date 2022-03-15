import { View, StyleSheet } from 'react-native'
import React from 'react'

export default function Cross() {
  return (
    <View style={styles.cross}>
        <View style={styles.crossLine}/>
        <View style={[styles.crossLine, styles.crossLineReversed]}/>
      </View>
  )
}

const styles = StyleSheet.create({
    cross:{
        flex:1,
      },
    
      crossLine:{
        width:10,
        height:"100%",
        left:"48%",
        borderRadius:5,
        backgroundColor:'white',
        position:'absolute',
        transform:[
          {
            rotate:'45deg'
          }
        ]
      },
      crossLineReversed:{
        transform:[
          {
            rotate:'-45deg'
          }
        ]
      }
})