import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
// import { FAB } from 'react-na'

import NavigatorIcon from '../../components/common/NavigatorIcon';
import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import YellowFAB from '../../components/common/YellowFAB';
import Shop from '../../components/shop/Shop';

import colors from '../../styles/colors';
import { shopData } from '../../utils/data';

export default class ShopList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '店铺列表'),
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

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }   

  /** 
   * 渲染店铺
   */
  renderItem = ({ item }) => {
    return <Shop {...item} />;
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <FlatList 
          data={shopData}
          renderItem={this.renderItem}   
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.navigator_container}
        /> 
        <YellowFAB />

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
