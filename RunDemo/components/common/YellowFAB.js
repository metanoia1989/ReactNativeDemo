import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { FAB, Portal } from 'react-native-paper';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';


const defaultActions = [
  { icon: 'add', onPress: () => console.log('Pressed add') },
  { icon: 'star', label: 'Star', onPress: () => console.log('Pressed star')},
  { icon: 'email', label: 'Email', onPress: () => console.log('Pressed email') },
  { icon: 'notifications', label: 'Remind', onPress: () => console.log('Pressed notifications') },
];


class YellowFAB extends Component {
  static propTypes = {
    isFocused: PropTypes.bool,
    isTab: PropTypes.bool,
    actions: PropTypes.array,
    onPress: PropTypes.func,
  };

  static defaultProps = {     
    isTab: true,
    onPress: () => console.log('点击了底部按钮'),
  };
     
  state = {
    open: false,
  }


  render () {
    const { isFocused, actions = [], isTab, onPress } = this.props;

    let icon = this.state.open ? 'close' : 'add';
    if(actions.length === 0) icon = 'add';

    const handleStateChange = ({ open }) => {
      if(actions.length === 0){
        onPress();
      } else {
        this.setState({ open });
      }
    }

    return (
      <View>
        {isFocused && (
          <Portal>
            <FAB.Group
              open={this.state.open}
              icon={icon}
              color='white'
              style={styles.container}
              fabStyle={styles.fabStyle}
              actions={actions}
              onStateChange={handleStateChange}
              onPress={() => {}}
            />
          </Portal>
        )} 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  fabStyle: {
    backgroundColor: colors.primaryYellow,
  },
});

export default withNavigationFocus(YellowFAB);