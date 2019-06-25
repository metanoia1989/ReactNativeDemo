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

export default class AnimatedDecay extends Component {
  state = {
    decayValue: new Animated.ValueXY({ x: 0, y: 0}),
  };

  decayAnimated = Animated.decay(
    this.state.decayValue,
    {
      velocity: 5, // 起始速度
      deceleration: 0.95, // 速度衰减比例 默认 0.997
    },
  );

  _startAnimated = () => {
    this.decayAnimated.start(() => {
      this.state.decayValue.setValue({ x: 0, y: 0 });  
    });
  }

  render() {
    const { decayValue } = this.state;
    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            width: 100,  
            height: 150,
            transform: [
              { translateX: decayValue.x }, // x 轴移动
              { translateY: decayValue.y }, // y 轴移动
            ]
          }}
        >
          <Image 
            style={{width: 100, height: 150}} 
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