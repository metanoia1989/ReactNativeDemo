import  React from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './navigator/MainNavigator';

import { Provider as PaperProvider } from 'react-native-paper';

const AppContainer = createAppContainer(MainNavigator);

export default function App() {
  return  (
    <PaperProvider>
      <AppContainer />
    </PaperProvider>
  )
}