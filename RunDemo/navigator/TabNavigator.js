import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import {
  HomeStack,
  ProductStack,
  ShopStack,
  UserStack
} from './StackNavigator';
import colors from '../styles/colors';


const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Products: ProductStack,
  Shops: ShopStack,
  User: UserStack,
}, {
  initialRouteName: 'User',
  tabBarOptions: {
    activeTintColor: colors.primaryYellow,
    inactiveTintColor: colors.grayWhite, 
    indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
    },
    showIcon: true,
    labelStyle: {
        // fontSize: 13, // 文字大小
    },
    style: {
      backgroundColor: colors.bgWhite,
    }, 

  }
});


export default TabNavigator;
