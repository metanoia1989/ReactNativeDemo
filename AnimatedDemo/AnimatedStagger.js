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

export default class AnimatedStagger extends Component {
  state = {
    redValue: new Animated.Value(0),
    blueValue: new Animated.Value(0),
  };

  staggerAnimated = Animated.stagger(2000, [
    Animated.timing(
      this.state.redValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.in
      }
    ),
    Animated.timing(
      this.state.blueValue,
      {
        toValue: 1,
        duration: 5000,
        easing: Easing.in
      }
    )
  ]);

  _startAnimated = () => {
    this.staggerAnimated.start(() => {
      this.state.redValue.setValue(0);
      this.state.blueValue.setValue(0);
    });
  }

  render() {
    const { redValue, blueValue } = this.state;

    const redMarginLeft = redValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    });

    const blueMarginLeft = blueValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 200]
    });

    return (
      <View style={styles.mainStyle}>
        <Animated.View style={{ 
            width: 100,  
            height: 100,
            backgroundColor: 'red',
            marginLeft: redMarginLeft,
          }}
        />
        <Animated.View style={{ 
            width: 100,  
            height: 100,
            backgroundColor: 'blue',
            marginLeft: blueMarginLeft,
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