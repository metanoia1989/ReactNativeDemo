import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Item from './Item';
import  colors  from '../../styles/colors';

export default class List extends Component {

  static propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
      icon: PropTypes.string,
      color: PropTypes.string,
      title: PropTypes.string.isRequired,
      arrow: PropTypes.bool,
      last: PropTypes.bool,
      onPress: PropTypes.func,
    })),
  };


  /** 
   * 渲染商品
   */
  renderItem = ({ index, item }) => {
    const last = this.props.actions.length === index + 1;
    return <Item {...item} last={last} />;
  };

  render() {
    const { actions } = this.props;

    return (
      <FlatList 
        data={actions}
        renderItem={this.renderItem}   
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
      />
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgWhite,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
  },
});