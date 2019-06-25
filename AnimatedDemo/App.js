/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Page1 from './Page1';
import LayoutDemo from './LayoutDemo';
import AnimatedDemo1 from './AnimatedDemo1';
import AnimatedDemo2 from './AnimatedDemo2';
import AnimatedScrollDemo from './AnimatedScrollDemo';
import AnimatedGestureDemo from './AnimatedGestureDemo';
import AnimatedOpacity from './AnimatedOpacity';
import AnimatedMixture from './AnimatedMixture';
import AnimatedSpring from './AnimatedSpring';
import AnimatedDecay from './AnimatedDecay';
import AnimatedParallel from './AnimatedParallel';
import AnimatedSequence from './AnimatedSequence';
import AnimatedStagger from './AnimatedStagger';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>动画示例</Text>
        {/* 渐渐显示，以及 LayoutAnimation 动画 */}
        {/* <Page1 /> */}
        {/* <LayoutDemo /> */}

        {/* Animated demo1 */}
        {/* <AnimatedDemo1 /> */}

        {/* Animated demo2 */}
        {/* <AnimatedDemo2 /> */}

        {/* AnimatedScrollDemo 滚动动画 */}
        {/* <AnimatedScrollDemo /> */}

        {/* AnimatedGestureDemo 手势动画 */}
        {/* <AnimatedGestureDemo /> */}

        {/* AnimatedOpacity timing 时间动画效果 */}
        {/* <AnimatedOpacity /> */}

        {/* AnimatedMixture interpolate 映射值 多个效果 */}
        {/* <AnimatedMixture />   */}

        {/* AnimatedSpring spring 弹簧动画效果 */}
        {/* <AnimatedSpring /> */}
        
        {/* AnimatedDecay decay 衰变动画效果 */}
        {/* <AnimatedDecay /> */}

        {/* AnimatedParallel 并行执行 parallel */}
        {/* <AnimatedParallel /> */}

        {/* AnimatedSequence 顺序执行 sequence */}
        {/* <AnimatedSequence /> */}

        {/* AnimatedStagger 间隔执行 stagger */}
        <AnimatedStagger />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
