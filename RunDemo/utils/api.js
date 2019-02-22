/*
 * @Description: 项目的各种请求 API
 * @Author: Smith Adam
 * @Email: sogaxili@gmail.com
 * @LastEditors: Smith Adam
 * @Date: 2019-02-18 10:00:15
 * @LastEditTime: 2019-02-22 17:23:07
 */

import React from 'react';
// import { MaterialIcons } from '@expo/vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/** 
 *  获取 tabbar 图标
 */
const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

/**
 * 获取图标 
 * @param {string} icon 
 * @param {string} color 
 * @param {number} size 
 */
const getMaterialIcon = (icon, color = 'gray', size = 26) => (
  <MaterialIcons name={icon} size={size} style={{ color }} />
); 

const fetchHomeOrders = async () => {};

 
export {
  getTabBarIcon,
  getMaterialIcon,
}