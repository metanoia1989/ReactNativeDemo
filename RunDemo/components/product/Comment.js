import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Box from '../form/Box';
import Item from '../form/Item';

import colors from '../../styles/colors';
import { texts } from '../../styles/components';

const urls = [
  'https://s1.ax1x.com/2018/05/12/CBlFQP.jpg',
  'https://s1.ax1x.com/2018/05/12/CBlCRI.jpg',
  'https://s1.ax1x.com/2018/05/12/CBlnij.jpg',
  'https://s1.ax1x.com/2018/05/12/CBQzIH.jpg',
  'https://s1.ax1x.com/2018/05/12/CBlZdg.jpg',
  'https://s1.ax1x.com/2018/05/12/CBlAL8.jpg',
];

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
    last: PropTypes.bool,
  };

  static defaultProps = {
    last: false,
  };

  render() {
    const {
      realname, 
      store_name,
      text, img,
      date_added,
      last,
    } = this.props;

    return (
      <View style={[styles.container, last && styles.last]}>
        <Box>
          <Item title="卖家" content="前无古人"  />
          <Item 
            title="评论内容" 
            content="哈哈大笑，嘻嘻哈哈哈，wuli韬韬哼哈花费大时代是发送到发送到发送到发士大夫撒地方"  
            bigContent={true}
          />
          <Item title="评论配图">
            <ScrollView style={styles.imageBox} horizontal={true}>
              {urls.map((uri, index) => (<Image key={index} style={styles.image} source={{uri}} />))}
            </ScrollView>
          </Item>
          <Item title="评论时间" content="2018-12-03" />
          <Item title="帮手" content="测试服务社" last={true}  />
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
  last: {
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
  },
  imageBox: {
    marginVertical: 5,
  },
  image: {
    width: 200,
    height: 200, 
    marginRight: 1,
  },
});