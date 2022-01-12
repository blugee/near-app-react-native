import React from 'react';
import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import styles from './HomeScreenStyles';
import * as Animatable from 'react-native-animatable';


/**
 * This is the Home Screen for this Application
 * Once user cross all other screen we will redirect user into this particular screen.
 */
const HomeScreen = ({ navigation }) => {

    /**
     * This is the basic render method for this simple screen.
     */
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F5F5F5' />

            <View style={styles.fadeInAction}>
                <Image style={styles.homeBackground} source={require('../../../../assets/homeBackground.png')} />
                <View style={styles.headerText} />
                <View style={styles.headerTextOne}>
                    <Image style={styles.logoWhite} source={require('../../../../assets/logoWhite.png')} />
                    <Text style={styles.logoDesc}>a web3 gateway to hidden experiences</Text>
                </View>
            </View>

            <View style={styles.welcomeText}>
                <Text style={styles.welcomeTextOne}>Welcome back!</Text>
                <Text style={styles.welcomeTextTwo}>Please enter the password to unlock this wallet</Text>
            </View>

            <View style={styles.password}>
                <Text style={{ fontSize: 18 }}>Password</Text>
                <TextInput style={styles.passwordInput} />
            </View>
            <TouchableOpacity style={styles.nearButton} onPress={() => navigation.navigate('HomeScreen')}>
                <View>
                    <Text style={styles.nearText}> {"Unlock"}</Text>
                    <Image style={styles.nearForwardArrow} source={require("../../../../assets/forward.png")} />
                </View>
            </TouchableOpacity>
        </View >
    );
};

export default HomeScreen;
