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

export default class AnimatedOpacity extends Component {
  state = {
    fadeOutOpacity: new Animated.Value(1),
  };

  fadeOutAnimated = Animated.timing(
    this.state.fadeOutOpacity,
    {
      toValue: 0, // 透明度动画最终值
      duration: 3000, // 动画时长3000毫秒
      easing: Easing.linear,
    },
  );

  _startAnimated = () => {
    this.fadeOutAnimated.start(() => {
      this.state.fadeOutOpacity.setValue(1)
    });
  }

  render() {
    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            width: 200,  
            height: 300,
            opacity: this.state.fadeOutOpacity
          }}
        >
          <Image 
            ref="image" 
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