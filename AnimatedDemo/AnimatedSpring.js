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

export default class AnimatedSpring extends Component {
  state = {
    springValue: new Animated.Value(1),
  };

  springAnimated = Animated.spring(
    this.state.springValue,
    {
      toValue: 1,
      friction: 2, // 弹跳系数
      tension: 10, // 控制速度
    },
  );

  _startAnimated = () => {
    this.state.springValue.setValue(0.1)
    this.springAnimated.start();
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            width: 200,  
            height: 300,
            transform: [
              { scale: this.state.springValue }
            ]
          }}
        >
          <Image 
            style={{width: 200, height: 300}} 
            source={require('./assets/fruit.jpg')}
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