import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

export default class ToggleableTimeForm extends Component {
  render() {
    const { isOpen } = this.props;
    return (
      <View style={[styles.container, !isOpen && styles.buttonPadding]}>
        {isOpen ? <TimerForm /> : <TimerButton title="+" color="black" />}
      </View>
    )
  }
} 
   
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
})
