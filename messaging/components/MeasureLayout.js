import React, { Component } from 'react';
import {
  Platform, 
  StyleSheet, 
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import { Constants } from 'expo';

export default class MeasureLayout extends Component {
  static PropTypes = {
    children: PropTypes.func.isRequired,
  };
  
  constructor(props) {
    super(props);

    this.state = {
      layout: null,
    };
  }

  handleLayout = event => {
    const { nativeEvent: { layout } } = event;

    this.setState({
      layout: {
        ...layout,
        y: layout.y + (Platform.OS === 'android' ? Constants.statusBarHeight : 0 )
      },
    });
  };

  render() {
    const { children } = this.props;
    const { layout } = this.state;
 
    if(!layout) {
      return (
        <View onLayout={this.handleLayout} style={styles.container}>
          <Text>啥都沒有</Text>
        </View>
      );

    }
    
    return children(layout);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
