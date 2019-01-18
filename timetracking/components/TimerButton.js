import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ColorPropType } from 'react-native';
import PropTypes  from 'prop-types';

export default class TimerButton extends React.Component {
  static propTypes = {
    color: ColorPropType.isRequired,
    title: PropTypes.string.isRequired,
    small: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
  };

  static defaultProps = {
    small: true,
  }

  render() {
    const { color, small, title, onPress } = this.props
    return (
      <TouchableOpacity
        style={[styles.button, { borderColor: color }]}
        onPress={onPress}
      >
        <Text 
          style={[
            styles.buttonText,
            small ? styles.small : styles.large,
            { color },
          ]}
        >
          { title }
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    minWidth: 100,
    borderWidth: 1,
    borderRadius: 3,
    borderOpacity: 0.1,
  },
  small: {
    fontSize: 14,
    padding: 5,
  },
  large: {
    fontSize: 16,
    padding: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});