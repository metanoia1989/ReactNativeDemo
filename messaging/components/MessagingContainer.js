import React, { Component } from 'react';
import {
  BackHandler,
  LayoutAnimation,
  Platform,
  UIManager,
  View,
} from 'react-native';
import PropTypes from 'prop-types';

import { isIphoneX } from 'react-native-iphone-x-helper';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const INPUT_METHOD = {
  NONE: 'NONE',
  KEYBOARD: 'KEYBOARD',
  CUSTOM: 'CUSTOM',
};

export default class MessagingContainer extends Component {
  static propTypes = {
    // From 'KeyboardState
    containerHeight: PropTypes.number.isRequired,
    contentHeight: PropTypes.number.isRequired,
    keyboardHeight: PropTypes.number.isRequired,
    keyboardVisible: PropTypes.bool.isRequired,
    keyboardWillShow: PropTypes.bool.isRequired,
    keyboardWillHide: PropTypes.bool.isRequired,
    keyboardAnimationDuration: PropTypes.number.isRequired,

    // Managing the IME type
    inputMethod: PropTypes.oneOf(Object.values(INPUT_METHOD)).isRequired,
    onChangeInputMethod: PropTypes.func,

    // Rendering content
    children: PropTypes.node,
    renderInputMethodEditor: PropTypes.func.isRequired,
  };

  static defaultProps = {
    children: null,
    onChangeInputMethod: () => {},
  };



  /**
   * 切換鍵盤展示區
   */
  componentWillReceiveProps(nextProps) {
    const { onChangeInputMethod } = this.props;

    if(!this.props.keyboardVisible && nextProps.keyboardVisible) {
      // 鍵盤顯示
      onChangeInputMethod(INPUT_METHOD.KEYBOARD);
    } else if (
      // 鍵盤隱藏
      this.props.keyboardVisible &&
      !nextProps.keyboardVisible &&
      this.props.inputMethod !== INPUT_METHOD.CUSTOM
    ) {
      onChangeInputMethod(INPUT_METHOD.NONE);
    }

    const { keyboardAnimationDuration } = nextProps;
    const animation = LayoutAnimation.create(
      keyboardAnimationDuration,
      Platform.OS === 'android' 
        ? LayoutAnimation.Types.easeInEaseOut 
        : LayoutAnimation.Types.keyboard,
      LayoutAnimation.Properties.opacity,
    );
    LayoutAnimation.configureNext(animation);
  }

  componentDidMount() {
    this.subscription = BackHandler.addEventListener('hardwareBackPress', () => {
      const { onChangeInputMethod, inputMethod } = this.props;

      if(inputMethod === INPUT_METHOD.CUSTOM) {
        onChangeInputMethod(INPUT_METHOD.NONE)
        return true;
      }

      return false;
    });
  }

  componentWillUnmount() {
    this.subscription.remove();
  }

  render() {
    const {
      children,
      renderInputMethodEditor,
      inputMethod,
      containerHeight,
      contentHeight,
      keyboardHeight,
      keyboardWillShow,
      keyboardWillHide,
    } = this.props; 

    const useContentHeight = keyboardWillShow || inputMethod === INPUT_METHOD.KEYBOARD;
    const containerStyle = {
      height: useContentHeight ? contentHeight : containerHeight,
    };

    const showCustomInput = inputMethod === INPUT_METHOD.CUSTOM && !keyboardWillShow;
    const keyboardIsHidden = inputMethod === INPUT_METHOD.NONE && !keyboardWillShow;
    const keyboardIsHidding = inputMethod === INPUT_METHOD.KEYBOARD && keyboardWillHide;
    const inputStyle = {
      height: showCustomInput ? keyboardHeight || 250 : 0,

      // 兼容iPhoneX
      marginTop: isIphoneX() && (keyboardIsHidden || keyboardIsHidding) ? 24 : 0,
    };
    
    return (
      <View style={containerStyle}>
        {children}
        <View style={inputStyle}>
          {renderInputMethodEditor()}
        </View>
      </View>
    );
  }
}