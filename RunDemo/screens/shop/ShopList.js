import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';


import { getTabBarIcon } from '../../utils/api';
import NavigatorIcon from '../../components/common/NavigatorIcon';
import HeaderRightIcon from '../../components/common/HeaderRightIcon';

import Shop from '../../components/shop/Shop';
import YellowFAB from '../../components/common/YellowFAB';

import colors from '../../styles/colors';
import { shopData } from '../../utils/data';

export default class ShopList extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '店铺列表'),
    headerLeft: <NavigatorIcon />,
    headerRight: <HeaderRightIcon />, 

    tabBarLabel: '店铺',
    tabBarIcon: getTabBarIcon('store'),
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
});
