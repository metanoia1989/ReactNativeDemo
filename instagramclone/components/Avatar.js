import React, { Component } from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class Avatar extends Component {
  static propTypes = {
    initials: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor: ColorPropType.isRequired,
  };

  constructor(props){
    super(props);
  }

  render() {
    const { size, backgroundColor, initials } = this.props;
    const style = {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor,
    };
    
    return (
      <View style={[styles.container, style]} >
        <Text style={styles.text}>{initials}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
});