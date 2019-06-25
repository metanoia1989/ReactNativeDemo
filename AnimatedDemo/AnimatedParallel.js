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

export default class AnimatedParallel extends Component {
  state = {
    dogOpacityValue: new Animated.Value(1),
    dogACCValue: new Animated.Value(0),
  };

  parallelAnimated = Animated.parallel([
    Animated.timing(
      this.state.dogOpacityValue,
      {
        toValue: 1,
        duration: 1000,
      }
    ),
    Animated.timing(
      this.state.dogACCValue,
      {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
      }
    )
  ], {
    stopTogether: false
  });
  
  _startAnimated = () => {
    this.parallelAnimated.start(() => {
      setTimeout(() => {
        this.state.dogOpacityValue.setValue(1);   
        this.state.dogACCValue.setValue(0);
      }, 2000)
    });
  }

  render() {
    const { dogOpacityValue, dogACCValue } = this.state;

    // 透明度
    const dogOpacity = dogOpacityValue.interpolate({
      inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
      outputRange:[0, 1, 0, 1, 0, 1]
    });

    // 眼镜左边
    const left = dogACCValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-120, 127]
    });

    // 眼镜旋转
    const rotateZ = dogACCValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    // 项链上面
    const nectTop = dogACCValue.interpolate({
      inputRange: [0, 1],
      outputRange: [350, 235]
    });

    return (
      <View style={styles.mainStyle}>

        {/* 狗头 */}
        <Animated.View 
          style={{ 
            width: 375,  
            height: 240,
            opacity: dogOpacity
          }}
        >
          <Image 
            style={{width: 375, height: 242}} 
            source={require('./assets/dog.jpg')}
          />
        </Animated.View>

        {/* 项链 */}
        <Animated.View 
          style={{ 
            width: 250,  
            height: 100,
            position: 'absolute',
            top: nectTop,
            left: 93,
          }}
        >
          <Image 
            style={{ width: 250, height: 100 }} 
            source={require('./assets/necklace.jpg')}
            resizeMode="stretch"
          />
        </Animated.View>

        <View 
          style={{
            width: 375,
            height: 200,
            backgroundColor: 'white',
          }}
        />

        {/* 眼镜 */}
        <Animated.View 
          style={{ 
            width: 120,  
            height: 25,
            position: 'absolute',
            top: 160,
            left,
            transform: [
              { rotateZ}
            ],
          }}
        >
          <Image 
            style={{ width: 120, height: 25 }} 
            source={require('./assets/glasses.png')}
            resizeMode="stretch"
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