import React, { Component } from 'react';
import { 
  Text, 
  View, 
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import { getMaterialIcon } from '../../utils/api';
import colors from '../../styles/colors';

export default class Item extends Component {
  
  static propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    arrow: PropTypes.bool,
    last: PropTypes.bool,
    onPress: PropTypes.func,
  };

  static defaultProps = {
    color: colors.primaryYellow,
    icon: 'format-list-bulleted',
    arrow: true,
    last: false,
    onPress: () => console.log('点击了item'),
  };

  handlePress = () => {
    this.props.onPress();
  };

  render () {
    const { icon, color, title, arrow, last } = this.props;

    return (
      <TouchableHighlight underlayColor='#eee' onPress={this.handlePress}>
        <View style={[styles.item, last && styles.noBorder]}>    
          <View style={styles.content}>
            <View style={styles.icon}>
              {getMaterialIcon(icon, color)}
            </View>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View>
            {arrow && getMaterialIcon('keyboard-arrow-right', '#bbb')}
          </View>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 53,
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 1,
    marginHorizontal: 15,
  },
  noBorder: {
    borderBottomWidth: 0,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    color: '#555',
    fontWeight: '100',
  },
});