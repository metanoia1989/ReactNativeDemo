import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import { texts } from '../../styles/components';

export default class InsertText extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const { text } = this.props;

    return (
      <View style={styles.insert}>
        <Text style={[styles.insert_line, texts.grays_text]}>
          &ensp;&ensp;
          &ensp;&ensp;
          &ensp;&ensp;
        </Text>
        <Text style={[styles.insert_text, texts.grays_text]}>{text}</Text>
        <Text style={[styles.insert_line, texts.grays_text]}>
          &ensp;&ensp;
          &ensp;&ensp;
          &ensp;&ensp;
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  insert: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  insert_text: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 20,
  },
  insert_line: {
    width: 50,
    textDecorationLine: 'line-through',
  },
});