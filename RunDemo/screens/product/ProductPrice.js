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
import { fixeds } from '../../styles/components';

export default class ProductPrice extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '商品价格',
    headerStyle: {
      backgroundColor: colors.primaryYellow,
      elevation: 0,
    },
  });

  renderItem = ({ item }) => {
    return <Price {...item} />;
  };

  render() {
    const { name, prices } = productPricesData;

    return (
      <View style={styles.container}>
        <View style={fixeds.title_fixed}>
          <Title name={name} />
        </View>
        <ScrollView>
          <FlatList 
            data={prices}
            renderItem={this.renderItem}   
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.list_container}
          /> 
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBgColor,  
    position: 'relative',
  },
  list_container: {
    paddingTop: 50,
  },
});
