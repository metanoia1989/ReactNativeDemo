import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
} from 'react-native';

import Price from '../../components/product/Price';
import Title from '../../components/product/Title';

import colors from '../../styles/colors';
import { productPricesData } from '../../utils/data';

export default class ProductPrice extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '商品价格',
  });

  /** 
   * 渲染商品价格
   */
  renderItem = ({ item }) => {
    return <Price {...item} />;
  };

  render() {
    const { name, prices } = productPricesData;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.fixed}>
          <Title name={name} />
        </View>
        <FlatList 
          data={prices}
          renderItem={this.renderItem}   
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        /> 
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pageBgColor,  
    flex: 1,
  },
});
