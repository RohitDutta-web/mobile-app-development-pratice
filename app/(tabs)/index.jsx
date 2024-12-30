import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import favicon from "@/assets/images/favicon.png"
import React from 'react'

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={favicon} style={styles.image} resizeMode="cover">
      <Text style={styles.Text}>My first mobile app</Text>
      <Text style={styles.sub}>Creator : Rohit Dutta </Text>
      <Text style={styles.sub}>Date: 12/30/2024 </Text>
      <Text style={styles.sub}>Designation : Software Engineer</Text>
     </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1d2b51",
    width: "100%",
    height: "50%",
  },
  Text: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sub: {
    fontWeight: "condensed",
    color: "#fff",
    marginLeft: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },

  image: {
    opacity: 1,
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  }
})

export default app