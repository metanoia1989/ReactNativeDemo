import React, { Component } from 'react';
import {
  Platform, 
  Keyboard,
} from 'react-native';

import PropTypes from 'prop-types';

const INITIAL_ANIMATION_DURATION = 250;

export default class KeyboardState extends Component {
  static propTypes = {
    layout: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }).isRequired,
    children: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { layout: { height } } = props;

    this.state = {
      contentHeight: height,
      keyboardHeight: 0,
      keyboardVisible: false,
      keyboardWillShow: false,
      keyboardWillHide: false,
      keyboardAnimationDuration: INITIAL_ANIMATION_DURATION,
    };
  }

  /** 
   * 鍵盤事件偵聽
   */
  componentWillMount() {
    if (Platform.OS === 'ios') {
      this.subscriptions = [
        Keyboard.addListener('keyboardWillShow', this.keyboardWillShow),
        Keyboard.addListener('keyboardWillHide', this.keyboardWillHide),
        Keyboard.addListener('keyboardDidShow', this.keyboardDidShow),
        Keyboard.addListener('keyboardDidHide', this.keyboardDidHide),
      ];
    } else {
      this.subscriptions = [
        Keyboard.addListener('keyboardDidShow', this.keyboardDidShow),
        Keyboard.addListener('keyboardDidHide', this.keyboardDidHide),
      ];
    }
  }

  /**
   * 移除鍵盤的事件偵聽
   */
  componentWillUnmount() {
    this.subscriptions.forEach(subscription => subscription.remove());
  }

  /**
   * 鍵盤將要顯示
   */
  keyboardWillShow = event => {
    this.setState({ keyboardWillShow: true });
    this.measure(event); // 獲取鍵盤尺寸
  };

  /**
   * 鍵盤已經完全顯示
   */
  keyboardDidShow = event => {
    this.setState({
      keyboardWillShow: false,
      keyboardVisible: true,
    });
    this.measure(event);
  };

  /**
   * 鍵盤將要隱藏
   */
  keyboardWillHide = event => {
    this.setState({ keyboardWillHide: true });
    this.measure(event);
  };

  /**
   * 鍵盤已經完全隱藏
   */
  keyboardDidHide = () => {
    this.setState({
      keyboardWillHide: false,
      keyboardVisible: false,
    });
  };

  /**
   * 計算內容高度
   */
  measure = event => {
    const { layout } = this.props;

    const { 
      endCoordinates: { height, screenY }, 
      duration = INITIAL_ANIMATION_DURATION
    } = event;

    this.setState({
      contentHeight: screenY - layout.y,
      keyboardHeight: height,
      keyboardAnimationDuration: duration,
    });
  };

  render() {
    const { children, layout } = this.props;
    const {
      contentHeight,
      keyboardHeight,
      keyboardVisible,
      keyboardWillShow,
      keyboardWillHide,
      keyboardAnimationDuration,
    } = this.state;

    return children({
      containerHeight: layout.height,
      contentHeight,
      keyboardHeight,
      keyboardVisible,
      keyboardWillShow,
      keyboardWillHide,
      keyboardAnimationDuration,
    });
  }
}
