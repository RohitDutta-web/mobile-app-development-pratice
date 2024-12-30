import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const tabTwoScreen = () => {
  return (
    <View style={styles.div}>
      <Text style={styles.header}>explore page</Text>
      <View >
        <Text style={styles.child}>So i am learning mobile app development</Text>
        <Text style={styles.child}>Both for IOS and ANDROID</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    color: "white",
    width: "100%", 
    backgroundColor: "rgba(225,225,225, 0.5)",
    height: "auto",
    padding: 10,
  }
  ,
  div: {
    width: "100%",
    height: "100%",
    flex: 1,
    flexDirection: "column",
  },
  child: {
    color: "white",
    borderBlockColor: "white",
    
  }
})

export default tabTwoScreen