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
} from 'react-native';
import {  Button } from 'react-native-paper';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { buttons, texts } from '../../styles/components';

class Product extends Component {
  
  static propTypes = {
    product_id: PropTypes.number.isRequired,
    image: PropTypes.string,
    sku: PropTypes.string,
    product_name: PropTypes.string,
    model: PropTypes.string,
    unit: PropTypes.string,
    status: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    approved: PropTypes.number.isRequired,
    product_type_name: PropTypes.string,
    product_type_en: PropTypes.string,
    activity_name: PropTypes.string,
    join_activity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    activity_status: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {

  };

  navigateToPrice = () => {
    const { product_id: id, navigation } = this.props;
    console.log('跳转商品价格页面', id);
    navigation.navigate('ProductPrice', { id });
  };

  navigateToPreview = () => {
    const { product_id: id, navigation } = this.props;
    console.log('跳转商品预览页面', id);
    navigation.navigate('ProductPreview', { id });
  };

  navigateToEdit= () => {
    const { product_id: id, navigation } = this.props;
    console.log('跳转商品编辑页面', id);
    navigation.navigate('ProductOperate', { id });
  };

  navigateToComment= () => {
    const { product_id: id, navigation } = this.props;
    console.log('跳转商品评论页面', id);
    navigation.navigate('ProductComments', { id });
  };

  handleDelete = () => {
    const { product_id: id } = this.props;
    console.log('删除商品', id);
  };

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
          <Text style={[buttons.shadow_button, status ? texts.primary_text : texts.danger_text]}>
            {status ? '已启用' : '已停用'}
          </Text>
        </View>
        <View style={styles.product_content}>
          <Image style={styles.image} source={{ uri: image}} />
          <View>
            <Text style={texts.big_text}>{product_name}</Text>
            {Boolean(model) && (
              <Text>商品型号: {model}</Text>   
            )}
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
            onPress={this.navigateToPrice}
          >
            价格
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={false}
            color={colors.gray}
            style={styles.view_detail}
            onPress={this.navigateToPreview}
          >
           <Text style={texts.lightgray_text}>预览 </Text>
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.primary}
            style={styles.view_detail}
            onPress={this.navigateToEdit}
          >     
            编辑
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.danger}
            style={styles.view_detail}
            onPress={this.handleDelete}
          >     
           删除
          </Button>
          <Button 
            mode="contained" 
            compact={true}
            dark={true}
            color={colors.warning}
            style={styles.view_detail}
            onPress={this.navigateToComment}
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
    borderColor: colors.borderColor,
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
    width: 130,
    height: 130,
    marginRight: 10,
  },
});

export default withNavigation(Product);