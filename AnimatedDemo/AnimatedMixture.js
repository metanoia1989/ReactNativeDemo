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

export default class AnimatedMixture extends Component {
  state = {
    animatedValue: new Animated.Value(0),
  };

  rotateAnimated = Animated.timing(
    this.state.animatedValue,
    {
      toValue: 1, // 透明度动画最终值
      duration: 3000, // 动画时长3000毫秒
      easing: Easing.in,
      delay: 800,
    },
  );  

  _startAnimated = () => {
    this.state.animatedValue.setValue(0)
    this.rotateAnimated.start(() => {
      this._startAnimated();
    });
  }

  render() {
    const { animatedValue } = this.state;

    const rotateZ = animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const opacity = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 0]
    });

    const rotateX = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '180deg', '0deg']
    });

    const textSize = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [18, 32, 18]
    });

    const marginLeft = animatedValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 200, 0]
    });



    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            marginTop: 10,
            width: 100,  
            height: 100,
            transform: [ 
              { rotateZ } 
            ],
          }}
        >
          <Image 
            style={{width: 100, height: 100}} 
            source={require('./assets/fruit.jpg')}
          />
        </Animated.View>

        <Animated.View style={{ 
            marginTop: 10,
            width: 100,  
            height: 100,
            opacity,
            backgroundColor: 'red',
          }}
        />

        <Animated.Text
          style={{
            marginTop: 10,
            width: 100,
            fontSize: 18,
            color: 'white',
            backgroundColor: 'red',
            transform: [ 
              { rotateX } 
            ],
          }}
        >
          窗外风很大，小心屁股着凉
        </Animated.Text>

        <Animated.Text
          style={{
            marginTop: 10,
            height: 100,
            lineHeight: 100,
            fontSize: textSize,
            color: 'red',
          }}
        >
          红红火火 恍恍惚惚
        </Animated.Text>

        <Animated.View 
          style={{
            marginTop: 10,
            width: 100,
            height: 100,
            marginLeft,
            backgroundColor: 'red',
          }}
        />

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