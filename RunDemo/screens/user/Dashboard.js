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

import Item from '../../components/list/Item';
import List from '../../components/list/List';
import { userinfo } from '../../utils/data';
import { getMaterialIcon } from '../../utils/api';
import  colors  from '../../styles/colors';
import { texts } from '../../styles/componnets';


const listData = [
  { title: '客户订单', icon: 'view-list', color: colors.primary },
  { title: '退款列表', icon: 'mail', color: colors.warning},
  { title: '销售统计', icon: 'equalizer', color: colors.primary },
  { title: '我要提现', icon: 'euro-symbol', color: colors.success},
  { title: '运费设置', icon: 'local-shipping', color: colors.primary },
  { title: '修改密码', icon: 'mode-edit', color: colors.primary },
];

export default class Dashborad extends Component {

  render() {
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
        <List actions={listData} />
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