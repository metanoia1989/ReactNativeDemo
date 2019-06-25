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

export default class AnimatedDemo1 extends Component {
  state = {
    // translateValue: new Animated.ValueXY({ // 二维坐标 x: 0, y: 0,
    //   x: 0, y: 0
    // }),
    translateValue: new Animated.Value(1),
  };

  onPress = () => {
    // this.state.translateValue.setValue({ x: 0, y: 0 });
    // Animated.decay( // 以一个初始速度开始并且逐渐减慢停止 S = vt - (at^2) / 2; v = v - at
    //   this.state.translateValue, 
    //   {
    //     velocity: 7, // 起始速度
    //     deceleration: 0.1, // 速度衰减比例 默认 0.997
    //   }
    // ).start();
    Animated.spring(this.state.translateValue, {
      toValue: 0,
      velocity: 7,
      tension: -20,
      friction: 3,
    }).start();
  };

  render() {
    const { translateValue } = this.state;
         
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.content, {transform: [
          {scale: translateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 3],
          })},
          {rotate: translateValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '720deg'],
          })},
          {translateX: translateValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300],
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