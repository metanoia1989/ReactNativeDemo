/*
 * @Description: 订单组件
 * @Author: Smith Adam
 * @Email: sogaxili@gmail.com
 * @LastEditors: Smith Adam
 * @Date: 2019-02-21 09:51:11
 * @LastEditTime: 2019-02-21 10:25:40
 */

import React, { Component } from 'react';
import { 
  Text, 
  View, 
  StyleSheet,
  Platform,
} from 'react-native';
import {  Button } from 'react-native-paper';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';

export class Order extends Component {
  
  static propTypes = {
    order_id: PropTypes.string.isRequired,
    date_added: PropTypes.string.isRequired,
    status_en: PropTypes.string.isRequired,
    status_name: PropTypes.string.isRequired,
    store_name: PropTypes.string.isRequired,
    customer_email: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    shopping_name: PropTypes.string.isRequired,
    shopping_mobile: PropTypes.string.isRequired,
    shopping_address: PropTypes.string.isRequired,
  };

  render () {
    const { 
      order_id, date_added,  
      status_name, store_name, 
      total, 
      customer_email,
      shopping_name, 
      shopping_mobile, 
      shopping_address,
    } = this.props;

    return (
      <View style={styles.order}>
        <View style={styles.order_title}>
          <Text style={styles.order_id}>订单号: {order_id}</Text>
          <Text style={styles.order_button}>{status_name}</Text>
        </View>
        <View style={styles.order_content}>
          <Text style={styles.order_text}>订单日期: {date_added}</Text>
          <Text style={styles.order_text}>
            订单来源: <Text style={styles.primary_text}>{store_name}</Text>
          </Text>
          <Text style={styles.order_text}>客户: {customer_email}</Text>
          <Text style={styles.order_text}>
            总价: <Text style={styles.danger_text}>&yen;{total}</Text>
          </Text>
          <Text style={styles.order_text}>客户姓名: {shopping_name}</Text>
          <Text style={styles.order_text}>联系方式: {shopping_mobile}</Text>
          <Text style={styles.order_text}>地址: {shopping_address}</Text>
        </View>  
        <View style={styles.order_footer}>
          <Button 
            mode="contained" 
            icon="attach-money" 
            compact={true}
            dark={true}
            color={colors.warning}   
            style={styles.view_detail}
          >
            退款详情
          </Button>
          <Button 
            mode="contained" 
            icon="remove-red-eye" 
            compact={true}
            dark={true}
            color={colors.primary}
            style={styles.view_detail}
          >
            查看详情
          </Button>
        </View>
      </View>
    );
  }
}

export class Refund extends Component {

  static propTypes = {
    order_id: PropTypes.string.isRequired,
    date_ordered: PropTypes.string.isRequired,
    status_en: PropTypes.string.isRequired,
    return_status_name: PropTypes.string.isRequired,
    return_id: PropTypes.number.isRequired,
    current_name: PropTypes.string.isRequired,
    return_amount: PropTypes.number.isRequired,
    shipping_name: PropTypes.string.isRequired,
    shipping_mobile: PropTypes.string.isRequired,
    shipping_address: PropTypes.string.isRequired,
  };

  render () {
    const { 
      order_id, date_ordered,  
      status_en, return_status_name, 
      return_id, current_name, 
      return_amount,
      shipping_name, 
      shipping_mobile, 
      shipping_address,
    } = this.props;

    return (
      <View style={styles.order}>
        <View style={styles.order_title}>
          <Text style={styles.order_id}>订单号: {order_id}</Text>
          <Text style={styles.order_button}>{return_status_name}</Text>
        </View>
        <View style={styles.order_content}>
          <Text style={styles.order_text}>订单日期: {date_ordered}</Text>
          <Text style={styles.order_text}>退还号: {return_id}</Text>
          <Text style={styles.order_text}>客户: {current_name}</Text>
          <Text style={styles.order_text}>
            <Text style={styles.order_text}>退款金额: {return_amount}</Text>
          </Text>
          <Text style={styles.order_text}>客户姓名: {shipping_name}</Text>
          <Text style={styles.order_text}>联系方式: {shipping_mobile}</Text>
          <Text style={styles.order_text}>地址: {shipping_address}</Text>
        </View>
        <View style={styles.order_footer}>
          <Button 
            mode="contained" 
            icon="attach-money" 
            compact={true}
            dark={true}
            color={colors.warning}   
            style={styles.view_detail}
          >
            退款详情
          </Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  order: {
    backgroundColor: colors.bgWhite,  
    width: '100%',
    marginBottom: 10, 
    elevation: 1,
  },
  order_title: {
    flexWrap: 'wrap', 
    flexDirection: 'row',
    height: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,   
    position: 'relative',
  },   
  order_content: {
    borderTopWidth: 0.8,
    borderBottomWidth: 0.8,
    borderColor: '#eee',
    padding: 10,   
  },
  order_footer: {
    paddingVertical: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 40,
  },
  order_id: {
    fontSize: 15,
    height: 40,
    textAlign: 'center',
    textAlignVertical:'center',
  },
  order_button: {
    fontSize: 15,
    height: 30,
    position: 'absolute',
    right: 10,
    marginVertical: 5,
    textAlign: 'center',
    textAlignVertical:'center',
    color: '#39b54a',
    paddingHorizontal: 6,
    ...Platform.select({
      ios: {
      shadowColor: '#5eb95e',
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
  order_text: {
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
});