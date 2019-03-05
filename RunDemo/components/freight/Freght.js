import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Capsule from './Capsule';
import { texts } from '../../styles/components';

export default class FreighOperate extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    delivery_time: PropTypes.string.isRequired,
    is_shipping: PropTypes.string.isRequired,
    valuation: PropTypes.string.isRequired,
    freight: PropTypes.string.isRequired,
    special: PropTypes.string.isRequired,
  }


  render() {
    const {
      name, province, city,
      delivery_time, is_shipping,
      valuation, freight, special,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={texts.text_lg}>{name}</Text>
        <View style={styles.box}>
          <View style={styles.sub}>
            <Capsule left='发货地区' right={`${province} - ${city}`} />
            <Capsule left='是否包邮' right={is_shipping} />
            <Capsule left='计价方式' right={valuation} />
          </View>
          <View style={styles.sub}>
            <Capsule left='发货时间' right={delivery_time} />
            <Capsule left='指定包邮条件' right={special} />
            <Capsule left='运费方式' right={freight} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  box: {
    flexDirection: 'row',
    marginTop: 10,
  },
  sub: {
    flex: 1,
  },
});

