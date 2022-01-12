import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScreen/SplashScreen';
import MainScreen from '../MainScreen/MainScreen';
import OtpScreen from '../OtpScreen/OtpScreen';
import NEARAccountScreen from '../NEARAcount/NEARAccountScreen';
import SecureAccountScreen from '../SecureAccount/SecureAccountScreen';
import HomeScreen from '../../Private/Home/HomeScreen';
import SeedPhraseScreen from '../SeedPharse/SeedPhraseScreen';

/**
 * This file is the router file. Whenever we add new screen we need to make entry over here. 
 * So, that will register here and we can use further in application.
 */
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="MainScreen" component={MainScreen}/>
        <RootStack.Screen name="OtpScreen" component={OtpScreen}/>
        <RootStack.Screen name="NEARAccountScreen" component={NEARAccountScreen}/>
        <RootStack.Screen name="SecureAccountScreen" component={SecureAccountScreen}/>
        <RootStack.Screen name="SeedPhraseScreen" component={SeedPhraseScreen}/>
        <RootStack.Screen name="HomeScreen" component={HomeScreen}/>
        
    </RootStack.Navigator>
);

export default RootStackScreen;