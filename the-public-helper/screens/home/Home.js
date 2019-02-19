import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import { List } from 'react-native-paper';

import colors from '../../utils/colors';

const { width, height } = Dimensions.get('window');
const cellWH =  width  / 3;

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
    return (
      <View style={styles.container}>
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
            style={styles.order_box}
          >
            <Text>hello</Text>      
          </List.Accordion>
          <List.Accordion 
            title="退货订单"
            left={props => <List.Icon {...props} icon="event-busy" />}
            style={styles.order_box}
          >
            <Text>hello</Text>      
          </List.Accordion>
        </View>
      </View>
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
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOpacity: 0.075,
    shadowRadius: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
  order_box: {
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});