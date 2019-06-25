import React, { Component } from 'react';
import {
  Text,
  View,
  Animated,
  StyleSheet
} from 'react-native';

const arr = [];
for (let i = 0; i < 500; i++) {
  arr.push(i);
}

export default class AnimatedSequence2 extends Component {
  constructor(props){
    super(props);
    this.animatedValue = [];
    arr.forEach(value => {
      this.animatedValue[value] = new Animated.Value(0);
    })
  }

  componentDidMount(){
    this._startAnimated();
  }

  _startAnimated = () => {
    const animations = arr.map(item => {
      return Animated.timing(
        this.animatedValue[item],
        {
          toValue: 1,
          duration: 50
        }
      )
    })
    Animated.sequence(animations).start();
  };

  render(){
    const animations = arr.map((item, index) => {
      return (
        <Animated.View 
          key={index.toString()}
          style={{
            opacity: this.animatedValue[item],
            height: 20,
            width: 20,
            backgroundColor: 'red',
            marginLeft: 3,
            marginTop: 3,
          }}
        />
      );
    });

    return (
      <View style={styles.container}>
        {animations}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});