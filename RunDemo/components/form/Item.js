import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import sizes from '../../styles/sizes';
import { borders } from '../../styles/components';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    last: PropTypes.bool, // 列表的最后一项
    bigContent: PropTypes.bool, // 文本很大
  };

  static defaultProps = {
    title: '',
    content: '',
    last: false,
    bigContent: false,
  };


  render() {
    const { title, content, last, bigContent, children } = this.props;
    const hasChildren = Boolean(children);

    if (hasChildren) {
      return (
        <View style={[styles.container, last && borders.noBottomBorder, styles.column]}>
          <Text numberOfLines={1} style={styles.start}>
            {title}
          </Text>
          <View style={styles.endArea}>{children}</View>
        </View>
      );
    }

    return (
      <View style={[styles.container, last && borders.noBottomBorder]}>
        <Text numberOfLines={1} style={styles.start}>{title}</Text>
        <Text style={[styles.end, bigContent && styles.bigContent]}>{content}</Text>
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
  },
  row: {
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  start: {
    width: 100,
    marginRight: 10,
    fontSize: sizes.FormFontSize,
    textAlign: 'justify',
    textAlignVertical: 'center',
    height: sizes.FormItemHeight,
  },
  end: {
    flex: 1,
    fontSize: sizes.FormFontSize,
  },
  bigContent: {
    paddingVertical: 8,
  },
  endArea: {
    flex: 1,
  },
})
