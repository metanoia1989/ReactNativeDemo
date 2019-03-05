
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';

export default class Title extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    rightComponent: PropTypes.element,
  };

  render() {
    const { name, rightComponent } = this.props;
    console.log('是否有右侧的组件', Boolean(rightComponent));

    return (
      <View style={styles.container}>
        <Text numberOfLines={1} style={styles.text}>{name}</Text>
        {Boolean(rightComponent) && (
          <View style={styles.right}>
            {rightComponent}
          </View>
        )}
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgWhite,
    height: 50,
    padding: 10,
    textAlignVertical: 'center',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  text: {
    paddingLeft: 10,
    borderLeftWidth: 5,
    borderLeftColor: colors.primary,
    fontSize: 22,
  },
  right: {
    width: 80,
  },
});