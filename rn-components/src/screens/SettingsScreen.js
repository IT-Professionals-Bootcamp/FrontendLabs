import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native'

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings Screen</Text>
      <Button
        onPress={() => navigation.navigate('Intro')}
        title='Back to Intro/ Logout'
        color='#6236ff' />
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({})

