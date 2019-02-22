import React, { Component } from 'react';
import { 
  Text, 
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import NavigatorIcon from '../../components/common/NavigatorIcon';
import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import Product from '../../components/product/Product';

import colors from '../../styles/colors';
import { productData } from '../../utils/data';

export default class ProductList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '商品列表'),
    headerTitleStyle: {
      fontWeight: '100',
    },
    headerLeft: <NavigatorIcon />,
    headerRight: <HeaderRightIcon />, 
  });   

  handleHeader = () => {
    const{ navigation } = this.props;
    navigation.setParams({
      title: '啦啦啦啦',     
    });
  };

  /** 
   * 渲染商品
   */
  renderItem = ({ item }) => {
    return <Product {...item} />;
  };
   
  render() {
    console.log(productData);
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={productData}
          renderItem={this.renderItem}   
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.navigator_container}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pageBgColor,  
  },
  navigator_container: {
    backgroundColor: colors.pageBgColor,  
  },    
});