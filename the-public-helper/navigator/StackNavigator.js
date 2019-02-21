import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/home/Home';

import ProductListScreen from '../screens/product/ProductList';
import ProductOperateScreen from '../screens/product/ProductOperate';
import ProductPriceScreen from '../screens/product/ProductPrice';
import ProductPreviewScreen from '../screens/product/ProductPreview';
import ProductCommentsScreen from '../screens/product/ProductComments';

import ShopListScreen from '../screens/shop/ShopList';
import ShopOperateScreen from '../screens/shop/ShopOperate';

import DashboardScreen from '../screens/user/Dashboard';
import UserInfoScreen from '../screens/user/UserInfo';
import PasswordScreen from '../screens/user/Password';
import SigninScreen from '../screens/user/Signin';
import RegisterScreen from '../screens/user/Register';

import OrderListScreen from '../screens/order/OrderList';
import OrderDetailsScreen from '../screens/order/OrderDetails';
import RefundListScreen from '../screens/order/RefundList';
import RefundDetailsScreen from '../screens/order/RefundDetails';

import FreightListScreen from '../screens/freight/FreightList';
import FreightOperateScreen from '../screens/freight/FreightOperate';

import FinanceScreen from '../screens/other/Finance';
import WithDrawalScreen from '../screens/other/WithDrawal';
import CropperScreen from '../screens/other/Cropper';
import EditorScreen from '../screens/other/Editor';
import MapScreen from '../screens/other/Map';

import NavigatorIcon from '../components/common/NavigatorIcon';
import { getTabBarIcon } from '../utils/api';



/**
 * 产品列表页
 */
const ProductStack = createStackNavigator({
  ProductList: {
    screen: ProductListScreen,
  },
  ProductOperate: {
    screen: ProductOperateScreen,
  },  
  ProductPrice: {
    screen: ProductPriceScreen,
  },
  ProductPreview: {
    screen: ProductPreviewScreen,
  },
  ProductComments: {
    screen: ProductCommentsScreen,
  },
  Editor: {
    screen: EditorScreen,
  },  
}, {
  initialRouteName: 'ProductList',
  mode: 'card',  
  navigationOptions: {
    headerTitleStyle: {
      fontWeight: '100',
    },
    tabBarLabel: '商品',
    tabBarIcon: getTabBarIcon('local-mall'),
  },
});

/**
 * 店铺列表页
 */
const ShopStack = createStackNavigator({
  ShopList: {
    screen: ShopListScreen,
    navigationOptions: {
      title: '店铺列表',    
      headerTitleStyle: {
        fontWeight: '100',
      },
      headerLeft: <NavigatorIcon  />,
    },   
  },
  ShopOperate: {
    screen: ShopOperateScreen,
  },
  Editor: {
    screen: EditorScreen,
  },
  Map: {
    screen: MapScreen,
  },
}, {
  initialRouteName: 'ShopList',
  mode: 'card',  
  navigationOptions: {
    tabBarLabel: '店铺',
    tabBarIcon: getTabBarIcon('store'),
  },
});


/**
 * 个人中心
 */
const UserStack = createStackNavigator({
  Dashboard: {
    screen: DashboardScreen,
    navigationOptions: {
      title: '个人中心',
      headerTitleStyle: {
        fontWeight: '100',
      },
      headerLeft: <NavigatorIcon />,
    },   
  },  
  UserInfo: {
    screen: UserInfoScreen,
  },  
  Password: {
    screen: PasswordScreen,
  },  
  Finance: {  // 统计
    screen: FinanceScreen,
  },
  WithDrawal: { // 提现
    screen: WithDrawalScreen,
  },  
  OrderList: {
    screen: OrderListScreen,
  },
  OrderDetails: {
    screen: OrderDetailsScreen,
  },
  RefundList: {
    screen: RefundListScreen,
  },
  RefundDetails: {
    screen: RefundDetailsScreen,
  },
  FreightList: {
    screen: FreightListScreen,
  },
  FreightOperate: {
    screen: FreightOperateScreen,
  },
}, {
  initialRouteName: 'Dashboard',
  mode: 'card',  
  navigationOptions: {
    tabBarLabel: '个人中心',
    tabBarIcon: getTabBarIcon('account-circle')
  },
});

/**
 * 首页
 */
const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
      headerTitleStyle: {
        fontWeight: '100',
      },
      headerLeft: <NavigatorIcon />,
    },   
  },
  ProductList: {
    screen: ProductStack,
  },
  Order: {
    screen: OrderListScreen,
  },
  Freight: {
    screen: FreightListScreen,
  },
  WithDrawal: {
    screen: WithDrawalScreen,
  },
  User: {
    screen: UserStack,
  },
  Finance: {
    screen: FinanceScreen,
  },  
  Refund: {
    screen: RefundListScreen,
  },
  OrderDetails: {
    screen: OrderDetailsScreen,
  }
}, {
  initialRouteName: 'Home',
  mode: 'card',
  navigationOptions: {
    tabBarLabel: '首页',
    tabBarIcon: getTabBarIcon('home')
  },
});



export {
  HomeStack,
  ProductStack,
  ShopStack,
  UserStack,
}