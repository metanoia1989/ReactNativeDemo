import React, { Component } from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import PropTypes from 'prop-types';
import phoneNumberPropType from 'phone-number-prop-type';

export default class ContactListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: Image.propTypes.source,
    phone: phoneNumberPropType,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}