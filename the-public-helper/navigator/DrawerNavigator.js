import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { 
  DrawerItems,
  SafeAreaView,
  createDrawerNavigator,
  createStackNavigator,
} from 'react-navigation';

import TabNavigator from './TabNavigator';
import ProductListScreen from '../screens/product/ProductList';
import OrderListScreen from '../screens/order/OrderList';
import FinanceScreen from '../screens/other/Finance'; 
import FreightListScreen from '../screens/freight/FreightList';

import { getTabBarIcon } from '../utils/api';
import colors from '../utils/colors';


const drawerScreens = ['Tabs', 'ProductList', 'OrderList', 'Finance', 'FreightList'];

const DrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


const DrawerNavigator = createDrawerNavigator({
  Tabs: { 
    screen: TabNavigator,  
    navigationOptions: {   
      drawerLabel: '首页',
      drawerIcon: getTabBarIcon('home'),
    },
  },
  ProductList: {
    screen: ProductListScreen,
    navigationOptions: {
      drawerLabel: '我的商品',
      drawerIcon: getTabBarIcon('dns'),
    },
  },
  OrderList: {
    screen: OrderListScreen,
    navigationOptions: {
      drawerLabel: '我的订单',
      drawerIcon: getTabBarIcon('local-laundry-service'),
    },
  },
  Finance: {
    screen: FinanceScreen,
    navigationOptions: {
      drawerLabel: '我要提现',
      drawerIcon: getTabBarIcon('credit-card'),
    },
  },
  FreightList: {
    screen: FreightListScreen,
    navigationOptions: {
      drawerLabel: '运费列表',
      drawerIcon: getTabBarIcon('local-car-wash'),
    },
  },
}, {
  initialRouteName: 'Tabs',   
  contentComponent: DrawerContentComponent,
  contentOptions: {
    activeTintColor: colors.primaryYellow,
    inactiveTintColor: colors.grayWhite, 
  },
});

export default DrawerNavigator;