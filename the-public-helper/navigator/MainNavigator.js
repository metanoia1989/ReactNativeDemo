import { createSwitchNavigator } from 'react-navigation';
import DrawerNavigator from './DrawerNavigator';

import SigninScreen from '../screens/user/Signin';
import RegisterScreen from '../screens/user/Register';

const MainNavigator = createSwitchNavigator({
  // Loading: { 
  //   screen:  LoadingScreen 
  // },
  Drawer: { 
    screen:  DrawerNavigator 
  },
  Signin: { 
    screen:  SigninScreen 
  },
  Register: { 
    screen:  RegisterScreen 
  },
}, {
  initialRouteName: 'Drawer',
});

export default DrawerNavigator;     
// export default MainNavigator; 