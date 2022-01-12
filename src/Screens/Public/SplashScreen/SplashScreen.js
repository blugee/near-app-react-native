import React, { useEffect } from 'react';
import {
    View,
    Image,
} from 'react-native';
import styles from './SplashScreenStyles';


/**
 * This is the Splash screen for entire application.
 * When our application load we are showing this page or screen.
 */
const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainScreen')
        }, 2000);
    });

    return (
        <View style={styles.container}>

            <Image source={require('../../../../assets/splash-2.png')} style={styles.backgroundImage} />
            
        </View>
    );
};

export default SplashScreen;