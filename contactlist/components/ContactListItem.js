import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import phoneNumberPropType from 'phone-number-prop-type';

import ContactThumbnail from './ContactThumbnail';

export default class ContactListItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    avatar: Image.propTypes.source.isRequired,
    // phone: phoneNumberPropType,
    phone: PropTypes.string.isRequired,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { name, avatar, phone } = this.props;
 
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1, 
  },
  avatar: {
    flex: 1,
  },
  content: {
    flex: 4,
  },
  name: {
    fontWeight: 400,
  },
  phone: {
    color: '#0095ff',
  },
});