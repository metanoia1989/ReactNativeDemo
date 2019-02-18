import React, { Component } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { getMaterialIcon } from '../utils/api';

class LogoTitle extends Component {
  static propTypes = {
    title: PropTypes.string,
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {
    title: '',
  };

  /**
   * 切换抽屉菜单
   */
  handleToggleDrawer = () => {
    const { navigation } = this.props;
    navigation.toggleDrawer();
  };

  render() {
    const { title } = this.props;

    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={this.handleToggleDrawer}
      >
        <View style={styles.icon}>{getMaterialIcon('menu')}</View> 
        <Text>{title}</Text>     
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 5,
    marginRight: 5,
  },
});

export default withNavigation(LogoTitle);