
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { texts } from '../../styles/componnets';

export default class Price extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render() {
    const { name } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgWhite,
    minHeight: 50,
    padding: 10,
    textAlignVertical: 'center',
  },
  text: {
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    fontSize: 22,
  },
});