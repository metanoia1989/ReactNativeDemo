import React, { Component } from 'react';
import { Image, StyleSheet, View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

export default class Card extends Component {
  static propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  }

  constructor(props){
    super(props);
    this.state = {
      loadding: true,
    };
  }

  handleLoad = () => {
    this.setState({ loadding: false });
  };

  render() {
    const { fullname, image, linkText, onPressLinkText } = this.props;
    const { loadding } = this.state;
    return (
      <View>
        <AuthorRow 
          fullname={fullname}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <View style={styles.image}>
          {loadding && (
            <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
          )}
          <Image style={StyleSheet.absoluteFill} source={image} onLoad={this.handleLoad} /> 
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  },
});