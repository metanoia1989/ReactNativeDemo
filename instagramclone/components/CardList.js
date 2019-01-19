import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import { getImageFromId } from '../utils/api';
import Card from './Card';

export default class CardList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        author: PropTypes.string.isRequired,
      }),
    ).isRequired,
    commentsForItem: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
  };

  constructor(props){
    super(props);
  }

  renderItem = ({ item: { id, author } }) => {
    const { commentsForItem, onPressComments } = this.props;
    const comments = commentsForItem[id];
    const linkText = `${comments ? comments.length : 0} Comments`;
    return (
      <Card 
        fullname={author}
        image={{ uri: getImageFromId(id), }}
        linkText={linkText}
        onPressLinkText={() => onPressComments(id)}
      />
    );

  };

  keyExtractor = ({ id }) => id.toString();

  render() {
    const { items, commentsForItem } = this.props;
    
    return (
      <FlatList 
        data={items}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        extraData={commentsForItem}
      />
    );
  }
}