import React, { Component } from 'react'; 
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Options from './screens/Options';

import colors from './components/colors';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const ContactsScreen = StackNavigator({
  Contacts: {
    screen: Contacts,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Contacts',
  navigationOptions: {
    tabBarIcon: getTabBarIcon('list'),
  },
});

const FavoritesScreens = StackNavigator({
  Favorites: {
    screen: Favorites,
  },
  Profile: {
    screen: Profile,
  },
}, {
  initialRouteName: 'Favorites',
  navigationOptions: {
    tabBarIcon: getTabBarIcon('star'),
  },
});

const UserScreens = StackNavigator({
  User: {
    screen: User,
  },
  Options: {
    screen: Options,
  },
}, {
  mode: 'model',
  initialRouteName: 'User',
  navigationOptions: {
    tabBarIcon: getTabBarIcon('person'),
  },
});

export DrawerNavigator({
  Contacts: {
    screen: ContactsScreen,
  },
  Favorites: {
    screen: FavoritesScreens,
  },
  User: {
    screen: UserScreens,
  },
}, {
  initialRouteName: 'Contacts',
});

export default TabNavigator({
  Contacts: {
    screen: ContactsScreen,
  },
  Favorites: {
    screen: FavoritesScreens,
  },
  User: {
    screen: UserScreens,
  },
}, {
  initialRouteName: 'Contacts',
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      backgroundColor: colors.greyLight,
    },
    showLabel: false,
    showIcon: true,
    activeTintColor: colors.blue,
    inactiveTintColor: colors.greyDark,
    renderIndicator: () => null,
  },
});