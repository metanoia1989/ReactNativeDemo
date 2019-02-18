import React, { Component } from 'react';
import { Text, View } from 'react-native';
import LogoTitle from '../../components/LogoTitle';

export default class ProductList extends Component {

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>ProductList</Text>
      </View>
    );
  }
}
