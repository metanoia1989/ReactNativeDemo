/*
 * @Description: 商品组件
 * @Author: Smith Adam
 * @Email: sogaxili@gmail.com
 * @LastEditors: Smith Adam
 * @Date: 2019-02-21 09:51:11
 * @LastEditTime: 2019-02-21 18:11:27
 */

import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {  Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { buttons, texts } from '../../styles/componnets';

export default class Shop extends Component {
  
  // static propTypes = {
  //   shop_id: PropTypes.string.isRequired,
  // };

  render () {
    const { 
      introduce_id,
      introduce_image,
      name, title, content,
    } = this.props;


    return (
      <View style={styles.shop}>    
        <View style={styles.shop_content}>
          <Image style={styles.image} source={{ uri: introduce_image}} />
          <View style={styles.right_content}>
            <Text style={texts.big_text}>{name}</Text>
            <Text>{title}</Text>
            <Text>{content}</Text>
          </View> 
        </View>       
        <View style={styles.shop_footer}>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.primary}
            style={styles.view_detail}
          >     
            编辑
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.danger}
            style={styles.view_detail}
          >
           删除
          </Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  shop: {
    backgroundColor: colors.bgWhite,  
    width: '100%',
    marginBottom: 10, 
    elevation: 1,
  },
  shop_content: {
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#eee',
    padding: 10,   
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  shop_footer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 40,
  },
  shop_id: {
    fontSize: 15,
    height: 40,
    textAlign: 'left',
    textAlignVertical:'center',
  },
  shop_added: {
    fontSize: 15,
    height: 40,
    textAlign: 'left',
    textAlignVertical:'center',
  },
  shop_text: {
    fontSize: 15,
  },
  view_detail: {
    opacity: 0.8,
    marginHorizontal: 5,
    color: 'white',
    height: 30,
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
    marginRight: 10,
  },
});