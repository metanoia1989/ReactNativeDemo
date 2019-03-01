import React, { Component } from 'react';
import { 
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
} from 'react-native';

import Comment from '../../components/product/Comment';
import Title from '../../components/product/Title';

import colors from '../../styles/colors';
import { productCommentsData } from '../../utils/data';
import { fixeds } from '../../styles/components';

export default class ProductComments extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '商品评论',
    headerStyle: {
      backgroundColor: colors.primaryYellow,
      elevation: 0,
    },
  });

  renderItem = ({ item, index }) => {
    const last = productCommentsData.comments.length === index + 1;
    return <Comment {...item} last={last} />;
  };

  render() {
    const { name, comments } = productCommentsData;

    return (
      <View style={styles.container}>
        <View style={fixeds.title_fixed}>
          <Title name={name} />
        </View>
        <ScrollView>
          <FlatList 
            data={comments}
            renderItem={this.renderItem}   
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

