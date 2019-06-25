import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  Image,
  UIManager,
  Platform,
} from 'react-native';

export default class LayoutDemo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      width: 100,
      height: 100,
    };

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
 
  }


  startAnimation = () => {
    /** 
     * LayoutAnimation.Presets 提供的默认动画效果
     * easeInEaseOut 缓入缓出
     * linear 线性
     * spring 弹性
     */
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    // 使用 create 创建动画参数
    // LayoutAnimation.configureNext(LayoutAnimation.create(
    //   700, 
    //   LayoutAnimation.Types.linear, 
    //   LayoutAnimation.Properties.scaleXY
    // ));   

    // 自定义参数动画
    LayoutAnimation.configureNext({
      duration: 1000, // 持续时间
      create: { // 视图创建
        type: LayoutAnimation.Types.easeIn,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: { // 视图更新
        type: LayoutAnimation.Types.easeIn,
      },
    });  

    // 调试 打印三个参数对象都是啥，有啥不同就知道了
    console.log('LayoutAnimation.Presets.linear', LayoutAnimation.Presets.linear);
    console.log('LayoutAnimation.create', 
      LayoutAnimation.create(   
        700, 
        LayoutAnimation.Types.linear, 
        LayoutAnimation.Properties.scaleXY
    ));   
    console.log('LayoutAnamtion.configureNext 默认传参', {
      duration: 1000, // 持续时间
      create: { // 视图创建
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.scaleXY,
      },
      update: { // 视图更新
        type: LayoutAnimation.Types.linear,
      },
    });
    
    

    // =_= 第二个第三个都报错，不知道是咋回事，等会儿看看群里有没有反馈
    this.setState({
      width: this.state.width + 10, 
      height: this.state.height + 10
    });

  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
          ref='image'
          source={require('./assets/icon.jpg')}
          style={{width: this.state.width, height: this.state.height}}
        />
        <TouchableOpacity 
          style={styles.instructions}
          onPress={() => this.startAnimation()}
        >
          <Text style={{alignSelf: 'center', color: '#ffffff'}}>
            点击我
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flexDirection: 'column',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#00ff00',
    width: 150,
    height: 80,
  },
  instructions: {
    backgroundColor: '#ff0000',
    width: 80,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});