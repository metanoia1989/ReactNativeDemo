import React, { Component } from 'react';
import { SafeAreaView, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

export default class Comment extends Component {
  static propTypes = {
    style: ViewPropTypes.style,
    comments: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmitComment: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: null,
  };

  constructor(props){
    super(props);
  }

  render() {
    const { style, comments, onClose, onSubmitComment } = this.props;

    return (
      <SafeAreaView style={style}>
        <NavigationBar 
          title="Comments"
          leftText="Close"
          onPressLeftText={onClose}
        />
        <CommentInput placeholder="Leave a coment" onSubmit={onSubmitComment} />
        <CommentList items={comments} />
      </SafeAreaView>
    );
  }
}
