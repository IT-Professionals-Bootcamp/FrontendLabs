import React from 'react'
import { StyleSheet, Text, } from 'react-native'

export const Title = props => <Text style={{ ...styles.titleStyle, ...props.style, }}>{props.children}</Text>;


const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 28,
    lineHeight: 34,
    textAlign: 'center',
    letterSpacing: 0.36,
  }
})
