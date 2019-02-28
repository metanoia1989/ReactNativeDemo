import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../styles/colors';
import { texts } from '../../styles/componnets';

export default class Price extends Component {
  static propTypes = {
    price: PropTypes.string,
    service_price: PropTypes.string,
    supplier_price: PropTypes.string,
    commission: PropTypes.string,
    combination: PropTypes.object,
  };

  render() {
    const {
      price,
      service_price,
      supplier_price,
      commission,
      combination
    } = this.props;

    return (
      <TouchableHighlight 
        underlayColor='#eee'
        style={styles.price} 
        onPress={() => {}}
      >
        <View>
          {Object.keys(combination).map(key => (
            <Text style={styles.text} key={key}>
              {key}: &nbsp;
              <Text style={texts.primary_text}>
                {combination[key]}
              </Text>
            </Text>       
          ))}
          <Text style={styles.text}>价格: &yen;{price}</Text>
          <Text style={styles.text}>帮手佣金: &yen;{service_price}</Text>
          <Text style={styles.text}>总平台服务费: &yen;{supplier_price}</Text>
          <Text style={styles.text}>
            供应商可获金额: &nbsp;
            <Text style={texts.danger_text}>
              &yen;{commission}
            </Text>
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}


const styles = StyleSheet.create({
  price: {
    backgroundColor: colors.bgWhite,  
    elevation: 1,
    flex: 1,
    padding: 19,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  text: {
    fontSize: 16,
  },
});