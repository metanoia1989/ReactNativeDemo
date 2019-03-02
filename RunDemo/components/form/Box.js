import React, { Component } from 'react'
import { StyleSheet, View, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types';
import colors from '../../styles/colors'

export default class Box extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.container, style]}>
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
