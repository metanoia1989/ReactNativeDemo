import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Animated,
  Easing,
} from 'react-native';

export default class AnimatedDemo2 extends Component {
  state = {
    bonceValue: new Animated.Value(0),
    rotateValue: new Animated.Value(0),
  };

  onPress = () => {
    const { bonceValue, rotateValue } = this.state;
    bonceValue.setValue(0);
    rotateValue.setValue(0);
    // 串行动画
    // Animated.sequence([
    //   Animated.spring(bonceValue, { toValue: 1 }),
    //   Animated.delay(500),
    //   Animated.timing(rotateValue, {
    //     toValue: 1,
    //     duration: 800,
    //     easing: Easing.out(Easing.quad),
    //   })
    // ]).start();   

    // 并行动画
    Animated.parallel([
      Animated.spring(bonceValue, {
        toValue: 1,
      }),
      Animated.timing(rotateValue, {
        toValue: 1,
        easing: Easing.elastic(1),
      })
    ]).start();
  };

  render() {
    const { bonceValue, rotateValue } = this.state;
       
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.content, {transform: [
          {scale: bonceValue },
          {rotate: rotateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
          })},
        ]}]}>   
          <Text style={styles.animatedText}>动画文字测试</Text>
        </Animated.View>
        <TouchableOpacity style={styles.content} onPress={this.onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>点击我！</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  content: {
    backgroundColor: 'rgba(200, 230, 225, 0.8)',
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 5,
  },
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: '#2196f3',
      borderRadius: 2,
      width: 100,
      height: 30,
    },
    justifyContent: 'center',
    alignSelf: 'center',
  }),
  animatedText: {
    textAlign: 'center',
  },
  buttonText: {
    alignSelf: 'center',
  },
});