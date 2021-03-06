import React, { Component } from 'react';
import { 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

import { getMaterialIcon } from '../../utils/api';

class NavigatorIcon extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
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
        style={styles.icon}
        onPress={this.handleToggleDrawer}
      >
        {getMaterialIcon('menu')}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    marginHorizontal: 10,
  },
});

export default withNavigation(NavigatorIcon);