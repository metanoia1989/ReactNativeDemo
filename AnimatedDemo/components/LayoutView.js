import React, { Component } from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class LayoutView extends Component {
  state = {
    w: 100,
    h: 100,
  };

  onPress = () => {
    // 更新动画
    LayoutAnimation.spring();
    const { w, h } = this.state;
    this.setState({
      w: w + 15,
      h: h + 15,
    });
  };

  render() {
    const { w, h } = this.state;
    return (
      <View style={styles.container}>
        <View style={[styles.box, {witdh: w, height: h}]}>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>点击我！</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});