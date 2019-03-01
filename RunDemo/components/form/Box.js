import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../styles/colors'

export default class Box extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgWhite,
    borderColor: colors.borderColor,
    elevation: 1,
    flex: 1,
    justifyContent: 'center',
  },
})
