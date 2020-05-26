import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('Text')}
        title='Text'
        color='#6236ff' />
      <Button
        onPress={() => navigation.navigate('Settings')}
        title='Settings'
        color='#6236ff' />


    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
