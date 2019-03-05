import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { texts } from '../../styles/components';

export default class Capsule extends Component {
  static propTypes = {
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }

  render() {
    const { left, right } = this.props;
    return (
      <View style={styles.capsule}>
        <Text style={styles.left}>{left}</Text>
        <Text style={styles.right}>{right}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  capsule: {
    margin: 1,
    flexDirection: 'row',
  },
  border: {
  },
  left: {
    backgroundColor: colors.primaryYellow,
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 0.8,
    borderRightWidth: 0,
    borderColor: colors.primaryYellow,
  },
  right: {
    backgroundColor: 'white',
    color: '#888',
    paddingHorizontal: 10,
    paddingVertical: 2,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRightWidth: 1,
    borderWidth: 0.8,
    borderLeftWidth: 0,
    borderColor: colors.primaryYellow,
  },
})
