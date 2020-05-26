import React from 'react'
import { StyleSheet, Image, Button, Text, View } from 'react-native'

const IntroScreen = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <Text style={styles.title}>Welcome</Text>
      <Image
        style={styles.image}
        source={require('../../assets/front.png')}
      />

      <Text style={styles.subtitle}>React Native Developer</Text>
      <Button
        onPress={() => navigation.navigate('Home')}
        title="Let's Start"
        color='#6236ff' />
    </View >
  )
}

export default IntroScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#6236ff",
    marginVertical: 15,
    //width: 350,

  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#fa6400",
    marginVertical: 20,
    //width: 350,
  },


})