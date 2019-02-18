import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

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
  navigateToPage = (routeName) => {
    const { navigation } = this.props;
    navigation.navigate(routeName);
  }

  renderPageItem = (item, index) => (
    <TouchableOpacity 
      onPress={this.navigateToPage}
      style={styles.lattice_box}
      key={index}
    >
      <View style={styles.lattice_item} > 
        <View style={styles.lattice_thumbnail}>
          <Image source={item.image} />
          {/* <Image source={require("/assets/images/home/link.jpg")} /> */}
        </View>
        <View style={styles.lattice_text}>
          <Text>{item.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );  

  render() {
    pages.map(item => console.log(item.image));
    return (
      <View style={styles.container}>
        {pages.map((item, index) => this.renderPageItem(item))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  lattice_box: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  lattice_item: {

  },
  lattice_thumbnail: {

  },
  lattice_text: {

  },
});