import React from 'react'
import { Title, Screen, Card } from '../components';
import { StyleSheet, Button, View, } from 'react-native';
import { Colors } from '../constants/Colors';


const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Card style={{ margin: 10, }}>
        <Title style={{ color: Colors.primary }}>Home View </Title>
      </Card>
      <View>
        <Button
          onPress={() => navigation.navigate('Text')}
          title='Text'
          color={Colors.secondary} />
        <Button
          onPress={() => navigation.navigate('Settings')}
          title='Settings'
          color={Colors.secondary} />
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
