import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import FadeInView from './components/FadeInView';
import LayoutView from './components/LayoutView';

export default class ProductSearch extends Component {

  render() {
    return (
      <View>
        <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading In</Text>
        </FadeInView>
        <LayoutView />
      </View>
    );
  }
}