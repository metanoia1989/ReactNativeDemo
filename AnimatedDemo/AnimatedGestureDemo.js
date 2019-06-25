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
  PanResponder
} from 'react-native';

export default class AnimatedGestureDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      trans: new Animated.ValueXY({ x: 0, y: 0}),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true, // 响应手势
      onPanResponderMove: Animated.event([null, { // 绑定动画值
        dx: this.state.trans.x,
        dy: this.state.trans.y,
      }]),
      onPanResponderRelease: () => { // 手松开，回到原始位置
        Animated.spring(this.state.trans, { 
          toValue: { x: 0, y: 0 }
        }).start();
      },
      onPanResponderTerminate: () => { // 手势中断，回到原始位置
        Animated.spring(this.state.trans, { 
          toValue: { x: 0, y: 0 }
        }).start();
      },
    });

    this.state.trans.addListener(value => {
      console.log(`动画正在执行 translateValue => x: ${value.x} y: ${value.y}`);
    });

    this.state.trans.stopAnimation(value => {
      console.log(`动画执行结束 translateValue => x: ${value.x} y: ${value.y}`);
    });
  }



  render() {
    const { trans } = this.state;
    
    return (
      <View style={styles.container}>
        <Animated.View 
          style={{ 
            width: 80,
            height: 80,
            borderRadius: 40,
            backgroundColor: 'blue',
            transform: [
              { translateX: trans.x },
              { translateY: trans.y },
            ],
          }}
          {...this.panResponder.panHandlers}
        >
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
});