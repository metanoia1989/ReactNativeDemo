import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';

export default class ContactThumbnail extends Component {
  static propTypes = {
    avatar: Image.propTypes.source.isRequired,
  };
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const { avatar } = this.props;
    return (
      <Image style={styles.img} source={{ uri: avatar }} />
    );
  }
}

const styles = StyleSheet.create({
  img: {
    
  },
});