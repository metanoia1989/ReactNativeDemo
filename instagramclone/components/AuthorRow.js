import React, { Component } from 'react';
import {
  StyleSheet, 
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import PropTypes from 'prop-types';

import Avatar from './Avatar';
import { getAvatarColor } from '../utils/getAvatarColor';
import { getInitials } from '../utils/getInitials';


export default class AuthorRow extends Component {
    static propTypes = {
      fullname: PropTypes.string.isRequired,
      linkText: PropTypes.string.isRequired,
      onPressLinkText: PropTypes.func.isRequired,
    };

  constructor(props) {
    super(props);
  }

  render() {
    const { fullname, linkText, onPressLinkText } = this.props;
    return (
      <View style={styles.container}>
        <Avatar 
          size={35}
          initials={getInitials(fullname)}
          backgroundColor={getAvatarColor(fullname)}
        />
        <Text style={styles.text} numberOfLines={1}>
          {fullname}
        </Text>
        {!!linkText && (
          <TouchableOpacity onPress={onPressLinkText}>
            <Text numberOfLines={1}>{linkText}</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});