import React, { Component } from 'react'
import { 
  Text, 
  View,
  TouchableWithoutFeedback,
  StyleSheet, 
} from 'react-native'
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import sizes from '../../styles/sizes';
import { borders } from '../../styles/components';
import { getMaterialIcon } from '../../utils/api';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    rightComponent: PropTypes.element,
    last: PropTypes.bool, // 列表的最后一项
    bigContent: PropTypes.bool, // 文本很大
    arrow: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    content: '',
    last: false,
    bigContent: false,
    arrow: false,
    onPress: () => {},
  };

  handlePress = () => {
    this.props.onPress();
  };


  render() {
    const { 
      title, content, last, 
      bigContent, children, 
      arrow, rightComponent
    } = this.props;

    const hasChildren = Boolean(children);
    const hasRightComponent = Boolean(rightComponent);


    if (hasChildren) {
      return (
        <View style={[styles.container, last && borders.noBottomBorder, styles.column]}>
          <Text numberOfLines={1} style={styles.left}>
            {title}
          </Text>
          <View style={styles.rightArea}>{children}</View>
        </View>
      );
    }

    return (
        <View style={[styles.container, last && borders.noBottomBorder]}>
          <Text numberOfLines={1} style={styles.left}>{title}</Text>
          <TouchableWithoutFeedback onPress={this.handlePress}>
            <View style={styles.right}>
              {hasRightComponent 
                ? <View style={styles.rightContent}>{rightComponent}</View>
                : (
                <Text style={[styles.rightContent, bigContent && styles.bigContent]}>{content}</Text>
              )}
              {arrow && getMaterialIcon('keyboard-arrow-right', '#bbb')}
            </View>
          </TouchableWithoutFeedback>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    minHeight: 50,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  left: {
    width: 100,
    marginRight: 10,
    fontSize: sizes.FormFontSize,
    textAlign: 'justify',
    textAlignVertical: 'center',
    height: sizes.FormItemHeight,
  },
  right: {
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  rightContent: {
    flex: 1,
    fontSize: sizes.FormFontSize,
  },
  bigContent: {
    paddingVertical: 8,
  },
  rightArea: {
    flex: 1,
  },
})
