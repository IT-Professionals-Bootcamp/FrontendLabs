import React from 'react';
import { StyleSheet, View } from 'react-native'

export const Screen = props => { return (<View> {props.children}</View>) }

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})
