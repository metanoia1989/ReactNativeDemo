import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { FormFontSize } from '../../styles/size';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    content: '',
  };

  render() {
    const { title, content } = this.props;

    return (
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.start}>{title}</Text>
        <Text style={styles.end}>{content}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
  start: {
    width: 100,
    marginRight: 10,
    borderWidth: 1,
    fontSize: FormFontSize,
    textAlign: 'justify',
  },
  end: {
    flex: 1,
    fontSize: FormFontSize,
  },
})
