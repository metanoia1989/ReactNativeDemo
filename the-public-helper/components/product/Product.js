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

export default class Product extends Component {
  
  // static propTypes = {
  //   product_id: PropTypes.string.isRequired,
  // };

  render () {
    const { 
      sku, model, image,
      status,
      product_name, 
      product_type_name,
      unit, quantity, approved,
    } = this.props;

    const approved_text = ['待审核', '已通过', '未通过'][approved];

    return (
      <View style={styles.product}>
        <View style={styles.product_title}>
          <Text style={styles.product_id}>商品编号: {sku}</Text>
          <Text style={styles.product_added}>商品型号: {model}</Text>
          <Text style={[styles.product_button, status ? styles.primary_text : styles.danger_text]}>
            {status ? '已启用' : '已停用'}
          </Text>
        </View>
        <View style={styles.product_content}>
          <Image style={styles.image} source={{ uri: image}} />
          <View style={styles.right_content}>
            <Text style={styles.big}>{product_name}</Text>
            <Text style={styles.small_text}>商品类型: {product_type_name}</Text>
            <Text style={styles.small_text}>销售单位: {unit}</Text>
            <Text style={styles.small_text}>库存数量: {quantity}</Text>
            <Text style={styles.status_text}>审核状态: {approved_text}</Text>
          </View>
        </View>  
        <View style={styles.product_footer}>
          <Button mode="contained" 
            compact={true}
            dark={true}
            color={colors.warning}   
            style={styles.view_detail}
          >
            价格
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.primary}
            style={styles.view_detail}
          >
           预览 
          </Button>
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
            color={colors.primary}
            style={styles.view_detail}
          >
           删除
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.primary}
            style={styles.view_detail}
          >
           查看评价
          </Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  product: {
    backgroundColor: colors.bgWhite,  
    width: '100%',
    marginBottom: 10, 
    elevation: 1,
  },
  product_title: {
    flexWrap: 'wrap', 
    height: 40,
    alignItems: 'center',
    paddingLeft: 10,   
    position: 'relative',
  },   
  product_content: {
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#eee',
    padding: 10,   
  },
  product_footer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 40,
  },
  product_id: {
    fontSize: 15,
    height: 40,
    textAlign: 'center',
    textAlignVertical:'center',
  },
  product_added: {
    fontSize: 15,
    height: 40,
    textAlign: 'center',
    textAlignVertical:'center',
    marginHorizontal: 12,
  },
  product_button: {
    fontSize: 15,
    height: 30,
    position: 'absolute',
    right: 10,
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical:'center',
    paddingHorizontal: 6,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
      android: {
        elevation: 0.5,
        borderRadius: 4,
      },
    }),
  },
  product_text: {
    fontSize: 15,
  },
  primary_text: {
    color: colors.primary,
  },
  danger_text: {
    color: colors.danger,
  },
  view_detail: {
    opacity: 0.8,
    marginHorizontal: 5,
    color: 'white',
    height: 30,
    justifyContent: 'center',
  },
  image: {

  },
});