import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,//创建动画的库
    Easing,//React Native创建动画的载体
} from 'react-native';

const screenWidth = Dimensions.get('window').width;;
const screenHeight = Dimensions.get('window').height;;

export default class AnimatedSequence extends Component {
  state = {
    turnRotateValue: new Animated.Value(0),
    turnShakeValue: new Animated.Value(0),
    macValue: new Animated.Value(0),
  };

  sequenceAnimated = Animated.sequence([
    Animated.timing(
      this.state.turnRotateValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.in,
      }
    ),
    Animated.timing(
      this.state.turnShakeValue,
      {
        toValue: 1,
        duration: 500,
        easing: Easing.in,
        delay: 300,
      }
    ),
    Animated.spring(
      this.state.macValue,
      {
        toValue: 1,
        friction: 3,
        tension: 10,
      }
    ),
  ]);

  _startAnimated = () => {
    console.log('顺序执行对象是否存在', this.sequenceAnimated);
    this.state.turnRotateValue.setValue(0);
    this.state.turnShakeValue.setValue(0);
    this.state.macValue.setValue(0);
    this.sequenceAnimated.start();
  }
  render() {
    const {
      turnRotateValue,
      turnShakeValue,
      macValue
    } = this.state;

    // 旋转
    const turnRotateZ = turnRotateValue.interpolate({
      inputRange: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      outputRange: ['0deg', '180deg', '360deg', '720deg', '1080deg', 
      '1800deg', '2520deg', '3060deg', '3420deg', '3600deg', '3690deg']
    });

    // 震动
    const marginLeft = turnShakeValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange: [0, -40, 40, -40, 40, 0]
    });

    // MacTop
    const macTop = macValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 150]
    });

    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            width: 300,  
            height: 300,
            marginLeft,
            transform: [
              { rotateZ: turnRotateZ }
            ]
          }}
        >
          <Image 
            style={{width: 300, height: 300}} 
            source={require('./assets/fruit.jpg')}
          />
        </Animated.View>

        <Animated.View style={{ 
            width: 150,  
            height: 150,
            position: 'absolute',
            top: macTop,
            left: screenWidth / 2 - 150,
          }}
        >
          <Image 
            style={{width: 150, height: 150}} 
            source={require('./assets/icon.jpg')}
          />
        </Animated.View>

        <TouchableOpacity 
          style={styles.touchStyle} 
          onPress={this._startAnimated}
        >
          <Text style={{
            width: 200, 
            height: 200,
            textAlign: 'center',
            lineHeight: 100
          }}>
            点击开始动画
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    width: screenWidth,
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 100,
  },
  touchStyle: {
    width: 200,
    height: 200,
    position: 'absolute',
    bottom: 0,
    left: screenWidth / 2 - 100,
  },
});