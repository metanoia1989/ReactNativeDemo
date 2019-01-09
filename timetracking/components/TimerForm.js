import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

import TimerButton from './TimerButton';

export default class TimerForm extends React.Components {
  render() {
    const submitText = this.props.id ? 'Update' : 'Create';

    return (
      <View style={styles.formContainer}>
        <View style={styles.attributeContainer}>
          <Text style={sytles.textInputTitle}>Title</Text>
          <View sytle={styles.textInputConatiner}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              defaultValue={this.props.title}
            />
          </View>
        </View>
        <View style={styles.attributeContainer}>
          <Text style={sytles.textInputTitle}>Project</Text>
          <View sytle={styles.textInputConatiner}>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              defaultValue={this.props.project}
            />
          </View>
        </View>
        <View style={sytles.buttonGroup}>
          <TimerButton small color="#21BA45" title={submitText} />
          <TimerButton small color="#DB2828" title="Cancel" />
        </View>
      </View>
    )
  }
}

const sytles = StyleSheet.create({
  formContainer: {
    backgroundColor: 'white',
    borderColor: '#D6D7DA',
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginBottom: 0,
  },
  attributeContainer: {
    marginVertical: 8,
  },
  textInputConatiner: {
    borderColor: '#D6D7DA',
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInput: {
    height: 30,
    padding: 5,
    fontSize: 12,
  },
  textInputTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBotton: 5,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});