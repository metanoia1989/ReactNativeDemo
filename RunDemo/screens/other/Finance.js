import React, { Component } from 'react';
import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import colors from '../../styles/colors';
import { fixeds, texts } from '../../styles/components';


export default class Finance extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('title', '销售统计'),
    headerStyle: {
      backgroundColor: colors.primaryYellow,
      elevation: 0,
    },
  });   

  constructor(props){
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleIndexChange = index => {
    console.log('点击了tab', index);
    this.setState(prevState => ({
      ...prevState,
      selectedIndex: index,
    }));
  };

  render() {
    const { selectedIndex } = this.state;

    return (
      <View style={styles.container}>
        <View style={[fixeds.title_fixed, styles.segmentWrapper]}>
          <SegmentedControlTab 
            values={['今日', '本周', '本月', '全部']}
            selectedIndex={selectedIndex}
            onTabPress={this.handleIndexChange}
            tabStyle={styles.tabStyle}
            tabTextStyle={styles.tabTextStyle}
            activeTabStyle={styles.activeTabStyle}
          />
        </View>
        <ScrollView style={styles.scrollView}>

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
  segmentWrapper: {
    backgroundColor: colors.bgWhite,
    padding: 15,
    width: '100%',
  },
  tabStyle: {
    borderColor: colors.primaryYellow,
  },
  tabTextStyle: {
    color: colors.primaryYellow,
  },
  activeTabStyle: {
    backgroundColor: colors.primaryYellow,
  },
  scrollView: {
    marginTop: 50,
  },
});