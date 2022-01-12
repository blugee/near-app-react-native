import React, { useEffect } from 'react';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import { AuthContext } from './components/context';
import RootStackScreen from './src/Screens/Public/RootStackScreen/RootStackScreen';
import AsyncStorage from '@react-native-community/async-storage';

/**
 * 
 * @returns This is the entry file for this application
 */
const App = () => {
  
  return (
    <PaperProvider >
      <AuthContext.Provider>
        <NavigationContainer>
          <RootStackScreen />
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
  );
}

export default App;
