import React, { Component } from 'react';
import { 
  Text, 
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-paper';

import NavigatorIcon from '../../components/common/NavigatorIcon';
import List from '../../components/list/List';
import { userinfo } from '../../utils/data';
import { getMaterialIcon, getTabBarIcon } from '../../utils/api';
import  colors  from '../../styles/colors';
import { texts } from '../../styles/components';


const listData = [
  { title: '客户订单', icon: 'view-list', color: colors.primary, target: 'OrderList' },
  { title: '退款列表', icon: 'mail', color: colors.warning, target: 'RefundList' },
  { title: '销售统计', icon: 'equalizer', color: colors.primary, target: 'Finance' },
  { title: '我要提现', icon: 'euro-symbol', color: colors.success, target: 'WithDrawal' },
  { title: '运费设置', icon: 'local-shipping', color: colors.primary, target: 'FreightList' },
  { title: '修改密码', icon: 'mode-edit', color: colors.primary, target: 'Password' },
];

export default class Dashborad extends Component {
  static navigationOptions = {
    title: '个人中心',
    headerLeft: <NavigatorIcon color={colors.headerColor} />,

    tabBarLabel: '个人中心',
    tabBarIcon: getTabBarIcon('account-circle')
  };


  render() {
    const { navigation } = this.props;
    const navigatorData = listData.map(item => {
      item.onPress = () => navigation.navigate(item.target);
      return item;
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ImageBackground
            style={styles.header_bg} 
            source={{uri: userinfo.headimgurl}} 
            blurRadius={0.8}
          />
          <View style={styles.user}>
            <Image style={styles.avatar} source={{uri: userinfo.headimgurl}} />
            <View style={styles.user_content}>
              <Text style={styles.username}>{userinfo.company}</Text>
              <View style={styles.usersub}>
                <Button 
                  mode='contained'
                  compact={true}
                  style={styles.button} 
                  onPress={() => console.log('hello')}
                >
                  编辑资料
                </Button>
                <TouchableOpacity style={styles.business_card}>
                  {getMaterialIcon('satellite', 'rgba(255,255,255,0.5)')}
                  <Text style={texts.white_text}> 个人名片</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <List actions={navigatorData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBgColor,
  },
  header: {
    minHeight: 170,
    overflow: 'hidden',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 25,
  },
  header_bg: {
    resizeMode: 'cover',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    opacity: 0.95,
    transform: [
      { scaleX: 1.2 },
      { scaleY: 1.2 },
    ],
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 6,
  },
  user_content: {
    flex: 1,
    height: 110,
    paddingLeft: 20,
  },
  username: {
    fontSize: 28,
    marginVertical: 5,
    color: 'white',
  },
  usersub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    maxWidth: 90,
    height: 30,
    backgroundColor: '#666',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 18,
  },
  business_card: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    backgroundColor: colors.bgWhite,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});