import React, { Component } from 'react';
import {
  Dimensions,
  FlatList,
  PixelRatio,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

export default class Grid extends Component {
  static propTypes = {
    renderItem: PropTypes.func.isRequired,
    numColumns: PropTypes.number,
    itemMargin: PropTypes.number,
  };

  static defaultProps = {
    numColumns: 4,
    itemMargin: StyleSheet.hairlineWidth,
  };

  renderGridItem = info => {
    const { index } = info;
    const { numColumns, itemMargin, renderItem } = this.props;
    const { width } = Dimensions.get('window');
    const size = PixelRatio.roundToNearestPixel(
      (width - itemMargin * (numColumns - 1)) /numColumns,
    );
    const marginLeft = index % numColumns === 0 ? 0 : itemMargin;
    const marginTop = index < numColumns ? 0 : itemMargin;
    return renderItem({ ...info, size, marginTop, marginLeft });
  };

  render() {
    const { numColumns } = this.props;

    return (
      <FlatList 
        style={styles.container}
        numColumns={numColumns}
        {...this.props} 
        renderItem={this.renderGridItem} 
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});