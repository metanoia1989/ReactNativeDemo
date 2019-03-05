import React, { Component } from 'react';
import { 
  Text,
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Button } from 'react-native-paper';

import HeaderRightIcon from '../../components/common/HeaderRightIcon';
import Freight  from '../../components/freight/Freght';
import Title from '../../components/product/Title';
import colors from '../../styles/colors';
import { freightData } from '../../utils/data';
import { fixeds, bgs, texts } from '../../styles/components';

export default class FreightList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '运费列表'),
    headerRight: <HeaderRightIcon color={colors.headerColor} />, 
    headerStyle: {
      backgroundColor: colors.primaryYellow,
      elevation: 0,
    },
  });   

  /**
   * 单个组件
   */
  renderItem = ({ item }, rowMap) => {
    return (
      <View style={styles.freight}>
        <Freight  {...item} />
      </View>
    );
  };

  /**
   * 侧滑删除部分
   */
  renderRightHiddenItem = (data, rowMap) => {
    return (
      <View style={styles.swipeRight}>
        <Text style={[styles.swipeHandle, bgs.warning_bg]}>编辑</Text>
        <Text style={[styles.swipeHandle, bgs.danger_bg]}>删除</Text>
      </View>
    );
  };

  renderButton = () => {
    const { navigation } = this.props;
    return (
      <Button 
        mode="contained" 
        compact={true}
        dark={true}
        color={colors.primaryYellow}
        style={styles.addButton}
        contentStyle={texts.center_text}     
        onPress={() => navigation.navigate('FreightOperate')}
      >
        新增
      </Button>
    );
  };

  render() {

    return (
      <View style={styles.container}>
        <View style={fixeds.title_fixed}>
          <Title 
            name='左滑运费模板可以进行编辑删除' 
            rightComponent={this.renderButton()}
          />
        </View>
        <ScrollView style={styles.freightList}>
          <SwipeListView
            useFlatList
            disableRightSwipe
            keyExtractor={(rowData, index) => index.toString()}
            data={freightData}
            renderItem={this.renderItem}
            renderHiddenItem={this.renderRightHiddenItem}
            stopRightSwipe={-200}
            rightOpenValue={-200}
            swipeRowStyle={styles.swipeRow}
          />
        </ScrollView>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.pageBgColor,  
    position: 'relative',
    flex: 1,
  },
  freightList: {
    marginTop: 50,
  },
  freight: {
    flex: 1,
    backgroundColor: colors.bgWhite,
  },
  swipeRow: {
    marginTop: 10,
  },
  swipeRight: {
    flex: 1,
    flexDirection: 'row', 
    justifyContent: 'flex-end',
  },
  swipeHandle: {
    fontSize: 18,
    color: 'white',
    height: '100%',
    width: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  addButton: {
    marginHorizontal: 5,
    color: 'white',
    height: 30,
    justifyContent: 'center',
    borderRadius: 7,
  },
});
