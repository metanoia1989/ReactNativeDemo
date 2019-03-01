import { 
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';
import { 
  ProductScreens,
  ShopScreens,
  UserScreens,
} from './StackScreens';

import SigninScreen from '../screens/user/Signin';
import RegisterScreen from '../screens/user/Register';

import colors from '../styles/colors';

// const MainNavigator = createSwitchNavigator({
  // Loading: { 
  //   screen:  LoadingScreen 
  // },
//   Drawer: { 
//     screen:  DrawerNavigator 
//   },
//   Signin: { 
//     screen:  SigninScreen 
//   },
//   Register: { 
//     screen:  RegisterScreen 
//   },
// }, {
//   initialRouteName: 'Drawer',
// });

const MainNavigator = createStackNavigator({
  MainTab: {
    screen: TabNavigator,
  },
  ...ProductScreens,
  ...ShopScreens,
  ...UserScreens,
  
}, {
  // initialRouteName: 'ProductList',
  initialRouteName: 'MainTab',
  defaultNavigationOptions: {
    headerTitleStyle: {
      color: 'white',
      fontWeight: '100',
    },
    headerStyle: {
      backgroundColor: colors.primaryYellow,
    },
  },
});

export default MainNavigator; 