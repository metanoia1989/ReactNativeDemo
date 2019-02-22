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
import { List } from 'react-native-paper';

import { Order, Refund } from '../../components/order/Order';
import colors from '../../styles/colors';
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
          keyExtractor={(item, index) => index.toString()}
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
              {orders.map((item, index) => <Order key={index} {...item} />)}
            </View>
          </List.Accordion>
          <List.Accordion 
            title="退货订单"
            left={props => <List.Icon {...props} icon="event-busy" />}
            style={styles.order_wrapper}
          >
            <View style={styles.order_bg}>
              {refunds.map((item, index) => <Refund key={index} {...item} />)}
            </View>
          </List.Accordion>
        </View>
      </ScrollView>
    );
  }
}       

const styles = StyleSheet.create({
  container: {
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
});