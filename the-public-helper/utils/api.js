import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
//import Icon from 'react-native-vector-icons/MaterialIcons';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const getMaterialIcon = (icon, color = 'black', size = 26) => (
  <MaterialIcons name={icon} size={size} style={{ color }} />
); 


export {
  getTabBarIcon,
  getMaterialIcon,
}