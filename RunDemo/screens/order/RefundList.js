import React, { Component } from 'react';
import { 
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import { Refund } from '../../components/order/Order';
import colors from '../../styles/colors';
import { refundsData } from '../../utils/data';

export default class RefundList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '客户订单'),
    headerRight: <HeaderRightIcon color={colors.headerColor} />, 
  });   

  /** 
   * 渲染订单
   */
  renderItem = ({ item }) => {
    return <Refund {...item} />;
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={refundsData}
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