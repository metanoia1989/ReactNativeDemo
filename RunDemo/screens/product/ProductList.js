import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';

import NavigatorIcon from '../../components/common/NavigatorIcon';
import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import YellowFAB from '../../components/common/YellowFAB';
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

    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={productData}
          renderItem={this.renderItem}   
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.navigator_container}
        />
        <YellowFAB actions={[
          { icon: 'account-balance-wallet', label: '添加普通实体商品', onPress: () => console.log('Pressed add') },
          { icon: 'branding-watermark', label: '添加服务类虚拟商品', onPress: () => console.log('Pressed star')},
        ]} />
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