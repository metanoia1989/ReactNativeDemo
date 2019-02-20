import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import { List, Button } from 'react-native-paper';

import colors from '../../styles/colors';
import { getMaterialIcon } from '../../utils/api';
import { homeData } from '../../utils/data';

/**
 * 获取设备宽度
 */
const { width: screenWidth } = Dimensions.get('window');
const cellWH =  screenWidth  / 3;

/**
 * 导航栏
 */
const pages = [
  {
    title: '产品管理',
    routeName: 'Product',
    image: require('../../assets/images/home/product.jpg'),
  },
  {
    title: '订单管理',
    routeName: 'Order',
    image: require('../../assets/images/home/case.jpg'),
  },
  {
    title: '运费设置',
    routeName: 'Freight',
    image: require('../../assets/images/home/link.jpg'),
  },
  {
    title: '申请提现',
    routeName: 'WithDrawal',
    image: require('../../assets/images/home/board.jpg'),
  },
  {
    title: '供应商信息',
    routeName: 'UserInfo',
    image: require('../../assets/images/home/member.jpg'),
  },
  {
    title: '销售统计',
    routeName: 'Finance',
    image: require('../../assets/images/home/banner.jpg'),
  },
  {
    title: '退换货管理',
    routeName: 'Refund',
    image: require('../../assets/images/home/news.jpg'),
  },
  {
    title: '扫一扫',
    routeName: 'Qrscan',
    image: require('../../assets/images/home/scan.jpg'),
  },
];

export default class Home extends Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     orders: [],
  //     refunds: [],
  //     loading: false,
  //     error: false,
  //   };
  // }

  // /**
  //  * 组件加载 获取数据
  //  */
  // async componentDidMount() {
  //   try {
  //     const { orders, refunds } = await fetchHomeOrders(); 
  //     this.setState({ 
  //       orders, 
  //       refunds,
  //       loading: true,
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     this.setState({
  //       loading: false,
  //       error: true,
  //     });
  //   }
  // }

  /** 
   * 跳转其他页面
   */
  navigateToPage = (routeName) => {
    const { navigation } = this.props;
    navigation.navigate(routeName);
  }

  /** 
   * 渲染导航栏项目
   */
  renderPageItem = ({item, index}) => {
    return (
      <TouchableOpacity 
        onPress={this.navigateToPage}
      >
        <View style={styles.item}>
          <View style={styles.image_wrapper}>
            <Image style={styles.image} source={item.image} />
          </View> 
          <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );  
  };
      
  render() {
    const { orders, refunds } = homeData;
        
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={pages}
          renderItem={this.renderPageItem}
          keyExtractor={(item, index) => index}
          numColumns={3}
          contentContainerStyle={styles.navigator_container}
        />
        <View style={styles.order_container}>
          <List.Accordion    
            title="客户订单"
            left={props => <List.Icon {...props} icon="event-note" />}
            style={[styles.order_wrapper, {borderBottomWidth: 0}]}
          >
            <View style={styles.order_bg}>
            {orders.map((item, index) => (
              <View style={styles.order} key={index}>
                <View style={styles.order_title}>
                  <Text style={styles.order_id}>订单号: {item.order_id}</Text>
                  <Text style={styles.order_added}>添加日期: {item.date_added}</Text>
                  <Text style={styles.order_button}>
                    {item.status_name}
                  </Text>
                </View>
                <View style={styles.order_content}>
                  <Text style={styles.order_text}>
                    订单来源: <Text style={styles.primary_text}>{item.store_name}</Text>
                  </Text>
                  <Text style={styles.order_text}>客户: {item.customer_email}</Text>
                  <Text style={styles.order_text}>
                    总价: <Text style={styles.danger_text}>&yen;{item.total}</Text>
                  </Text>
                  <Text style={styles.order_text}>客户姓名: {item.shopping_name}</Text>
                  <Text style={styles.order_text}>联系方式: {item.shopping_mobile}</Text>
                  <Text style={styles.order_text}>地址: {item.shopping_address}</Text>
                </View>  
                <View style={styles.order_footer}>
                  <Button 
                    mode="contained" 
                    icon="attach-money" 
                    compact={true}
                    color={colors.warning}
                    style={styles.view_detail}
                  >
                    退款详情
                  </Button>
                  <Button 
                    mode="contained" 
                    icon="remove-red-eye" 
                    compact={true}
                    color={colors.primary}
                    style={styles.view_detail}
                  >
                    查看详情
                  </Button>
                </View>
              </View>
            ))}
            </View>
          </List.Accordion>
          <List.Accordion 
            title="退货订单"
            left={props => <List.Icon {...props} icon="event-busy" />}
            style={styles.order_wrapper}
          >
            <View style={styles.order_bg}>
            {refunds.map((item, index) => (
              <View style={styles.order} key={index}>
                <View style={styles.order_title}>
                  <Text>订单号: {item.order_id}</Text>
                  <Text>添加日期: {item.date_ordered}</Text>
                  <Text>{item.return_status_name}</Text>
                </View>
                <View style={styles.order_content}>
                  <Text>退还号: {item.return_id}</Text>
                  <Text>客户: {item.current_name}</Text>
                  <Text>退款金额: {item.return_amount}</Text>
                  <Text>客户姓名: {item.shipping_name}</Text>
                  <Text>联系方式: {item.shipping_mobile}</Text>
                  <Text>地址: {item.shipping_address}</Text>
                </View>
                <View style={styles.order_footer}>
                  <View style={styles.button}>
                    <Text>退款详情</Text>
                  </View>
                </View>
              </View>
            ))}
            </View>
          </List.Accordion>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1, 
    backgroundColor: colors.pageBgColor,  
  },

  navigator_container: {
    backgroundColor: colors.bgWhite,  
  },    
  item: {
    paddingVertical: 10, 
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    width: cellWH,
    height: cellWH + 10,
    alignItems: 'center',
  },
  image_wrapper: {
    padding: 4,
    borderColor: '#ddd',
    borderRadius: 2,
    ...Platform.select({
      ios: {
        borderWidth: 1,
        shadowColor: '#000',
        shadowOpacity: 0.075,
        shadowRadius: 1,
        shadowOffset: {
          width: 0,
          height: 1,
        },
      },
      android: {
        elevation: 1,
      },
    }),
  },
  image: {
    maxWidth: cellWH - 45,
    maxHeight: cellWH - 45,
  },
  text: {
    marginTop: 5, 
    textAlign: 'center',
    fontSize: 15,
    fontWeight: "600",
  },
    
  order_container: {
    backgroundColor: colors.bgWhite,  
    marginTop: 10,
  },
  order_wrapper: {
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  order_bg: {
    backgroundColor: colors.pageBgColor,  
    paddingLeft: 0,     
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  order: {
    backgroundColor: colors.bgWhite,  
    width: screenWidth,
    marginBottom: 10, 
    elevation: 1,
  },
  order_title: {
    flexWrap: 'wrap', 
    height: 40,
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
  order_added: {
    fontSize: 15,
    height: 40,
    textAlign: 'center',
    textAlignVertical:'center',
    marginHorizontal: 12,
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