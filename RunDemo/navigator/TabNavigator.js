import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/Home';
import ProductListScreen from '../screens/product/ProductList';
import ShopListScreen from '../screens/shop/ShopList';
import DashboardScreen from '../screens/user/Dashboard';

import colors from '../styles/colors';
import ShopList from '../screens/shop/ShopList';


const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
  }, 
  Products: {
    screen: ProductListScreen,
  }, 
  Shops: {
    screen: ShopListScreen,
  },
  User: {
    screen: DashboardScreen,
  },
}, {
  initialRouteName: 'Home',
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

TabNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  switch (routeName) {
    case "Home":
      return HomeScreen.navigationOptions;
    case "Products":
      return ProductListScreen.navigationOptions({navigation});
    case "Shops":
      return ShopListScreen.navigationOptions({navigation});
    case "User":
      return DashboardScreen.navigationOptions;
  }
};


export default TabNavigator;
