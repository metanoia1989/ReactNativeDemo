import React from 'react';

import ProductOperateScreen from '../screens/product/ProductOperate';
import ProductPriceScreen from '../screens/product/ProductPrice';
import ProductPreviewScreen from '../screens/product/ProductPreview';
import ProductCommentsScreen from '../screens/product/ProductComments';

import ShopOperateScreen from '../screens/shop/ShopOperate';

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



/**
 * 产品相关页面
 */
const ProductScreens = {
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
};

/**
 * 店铺相关页面
 */
const ShopScreens = {
  ShopOperate: {
    screen: ShopOperateScreen,
  },
  Editor: {
    screen: EditorScreen,
  },
  Map: {
    screen: MapScreen,
  },
};


/**
 * 个人中心相关页面
 */
const UserScreens = {
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
}; 


export {
  ProductScreens,
  ShopScreens,
  UserScreens,
}