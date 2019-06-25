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
  ScrollView,
  Dimensions,
} from 'react-native';

const { 
  height: deviceHeight,
  width: deviceWidth
} = Dimensions.get('window');

export default class AnimatedScrollDemo extends Component {
  state = {
    xOffset: new Animated.Value(1.0),
  };


  render() {
    const { xOffset } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView 
          horizontal={true} // 水平滑动
          showsHorizontalScrollIndicator={false}
          style={{ width: deviceWidth, height: deviceHeight }}
          onScroll={Animated.event([ // 把 contentOffset.x 绑定给 this.state.xOffset
            {nativeEvent: { contentOffset: { x: xOffset }}}
          ])}
          scrollEventThrottle={10}
        > 
          <Animated.Image
            source={require('./assets/fruit.jpg')}
            style={{
              height: deviceHeight,
              width: deviceWidth,
              opacity: xOffset.interpolate({
                inputRange: [0, 375],
                outputRange: [1.0, 0.0]
              })
            }}
            resizeMode="cover"
          />
          <Image 
            source={require('./assets/icon.jpg')}
            style={{
              height: deviceHeight,
              width: deviceWidth,
            }}
            resizeMode="cover"
          />
        </ScrollView>
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