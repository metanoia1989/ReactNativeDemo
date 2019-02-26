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
          {Boolean(sku) && <Text style={styles.product_id}>商品编号: {sku}</Text>}
          {Boolean(model) && <Text style={styles.product_added}>商品型号: {model}</Text>}   
          <Text style={[buttons.shadow_button, status ? texts.primary_text : texts.danger_text]}>
            {status ? '已启用' : '已停用'}
          </Text>
        </View>
        <View style={styles.product_content}>
          <Image style={styles.image} source={{ uri: image}} />
          <View>
            <Text style={texts.big_text}>{product_name}</Text>
            <Text>商品类型: {product_type_name}</Text>
            <Text>销售单位: {unit}</Text>
            <Text>库存数量: {quantity}</Text>
            <Text style={approved ? texts.primary_text : texts.warning_text }>
              审核状态: {approved_text}
            </Text>
          </View> 
        </View>       
        <View style={styles.product_footer}>
          <Button mode="contained" 
            compact={true}
            dark={true}
            color={colors.success}   
            style={styles.view_detail}
          >
            价格
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={false}
            color={colors.gray}
            style={styles.view_detail}
          >
           <Text style={texts.lightgray_text}>预览 </Text>
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
            color={colors.danger}
            style={styles.view_detail}
          >
           删除
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.warning}
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
    flexWrap: 'nowrap', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    paddingLeft: 10,   
    position: 'relative',
  },   
  product_content: {
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#eee',
    padding: 10,   
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    textAlign: 'left',
    textAlignVertical:'center',
  },
  product_added: {
    fontSize: 15,
    height: 40,
    textAlign: 'left',
    textAlignVertical:'center',
  },
  product_text: {
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
    width: 100,
    height: 100,
    marginRight: 10,
  },
});