import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';

import PropTypes from 'prop-types';

import { getMaterialIcon } from '../../utils/api';

export default class NavigatorIcon extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    icon: PropTypes.string,
    color: PropTypes.string,
  };

  static defaultProps = {
    onPress: () => {},
    icon: 'search',
    color: 'gray',
  };

  handlePress = () => {
    this.props.onPress();
  };

  render () {
    const { icon, color } = this.props; 

    return (
      <TouchableOpacity 
        style={styles.icon}
        onPress={this.handlePress}
      >
        {getMaterialIcon(icon, color)}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
});