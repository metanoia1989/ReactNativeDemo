import React, { Component } from 'react';
import { 
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import { Order } from '../../components/order/Order';
import colors from '../../styles/colors';
import { ordersData } from '../../utils/data';


export default class OrderList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '客户订单'),
    headerRight: <HeaderRightIcon color={colors.headerColor} />, 
  });   

  /** 
   * 渲染订单
   */
  renderItem = ({ item }) => {
    return <Order {...item} />;
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={ordersData}
          renderItem={this.renderItem}   
          keyExtractor={(item, index) => index.toString()}
        /> 
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pageBgColor,  
  },
});
