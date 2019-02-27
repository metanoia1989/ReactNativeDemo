# 抽屉导航代码
```js
{
  ProductList: {
    screen: wrapStack('productList', ProductListScreen),
    navigationOptions: {
      drawerLabel: '我的商品',
      drawerIcon: getTabBarIcon('dns'),
    },
  },
  OrderList: {
    screen: wrapStack('orderList', OrderListScreen),
    navigationOptions: {
      drawerLabel: '我的订单',
      drawerIcon: getTabBarIcon('local-laundry-service'),
    },
  },
  Finance: {
    screen: wrapStack('Finance', FinanceScreen),
    navigationOptions: {
      drawerLabel: '我要提现',
      drawerIcon: getTabBarIcon('credit-card'),
    },
  },
  FreightList: {
    screen: wrapStack('Freight', FreightListScreen),
    navigationOptions: {
      drawerLabel: '运费列表',
      drawerIcon: getTabBarIcon('local-car-wash'),
    },
  },

}
```


