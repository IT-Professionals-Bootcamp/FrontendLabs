// 1 import
import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';


// 2 component

const App = () => {
  return (
    <View style={styles.container} >
      <Image
        style={styles.image}
        source={require('./assets/front.png')}
      />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>React Native Developer</Text>
      <Button
        onPress={() => { }}
        title="Let's Start"
        color='#6236ff' />
    </View >
  )
};

// 3 stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 350,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#6236ff",
    marginVertical: 15,
    width: 350,

  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#fa6400",
    marginVertical: 20,
    width: 350,
  },


})

// 4  export 
export default App;