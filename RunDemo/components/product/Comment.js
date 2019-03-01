import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Box from '../form/Box';
import Item from '../form/Item';

import colors from '../../styles/colors';
import { texts } from '../../styles/components';

export default class Comment extends Component {
  static propTypes = {
    realname: PropTypes.string,
    text: PropTypes.string,
    // img: PropTypes.arrayOf(Image.propTypes.source),
    img: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]), 
    date_added: PropTypes.string,
    store_name: PropTypes.string,
  };

  render() {
    const {
      realname, 
      store_name,
      text, img,
      date_added,
    } = this.props;

    return (
      <View style={styles.container}>
        <Box>
          <Item title="卖家" content="前无古人"  />
          <Item title="评论内容" content="哈哈大笑，嘻嘻哈哈哈，wuli韬韬"  />
          <Item title="评论配图" bigContent={true}  />
        </Box>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgWhite,  
    marginHorizontal: 10,
    marginTop: 10,
    minHeight: 50,
  },
  text: {
    fontSize: 16,
  },
});