import { NavigationBar } from 'navigationbar-react-native';
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import { Linking } from 'react-native';
import styles from './SecureAccountScreenStyles';


/**
 * This is the Secure Account Screen
 * In this screen we will secure our account by creating password and confirm password
 * User will promt for the those values and we will verify and save into the database.
 */
const SecureAccountScreen = ({ navigation }) => {


    /**
     * This is the state variable declaration for this particular page.
     */
    const [data, setData] = useState({})
    const [isValid, setIsValid] = useState(true)
    const [button, setButton] = useState(false)

    /**
     * This is common handle change method for entire page input control
     * Here we will set the value for particular control into the state.
     */
    const handelChange = (e, name) => {
        setData({
            ...data,
            [name]:e
        })
        
        if (data.Password && data.ConfirmPassword && data.Password === data.ConfirmPassword) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    /**
     * This function is call when user click on continue or submit button
     * In this function later on we will write the API call. 
     * That will verify the password and store into db. Based on that we will show user to next screen.
     */
    const handlePress = () => {

        if ((data.Password !== '' || data.ConfirmPassword !== '') && 
        (data.Password !== undefined || data.ConfirmPassword !== undefined) && 
         data.Password === data.ConfirmPassword) {
            setIsValid(true)
            setButton(true)
        } else {
            setIsValid(false)
        }
        navigation.navigate('SeedPhraseScreen')
    }

    const ComponentCenter = () => {
        return (
            <View style={styles.navigationBar}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Secure your account</Text>
                <Image
                    source={require('../../../../assets/close.png')}
                    style={styles.closeButton}
                />
                <View style={button === true ? styles.trueline : styles.line} />
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F5F5F5' />

            <NavigationBar
                componentCenter={() => <ComponentCenter />}
                navigationBarStyle={{ backgroundColor: '#F5F5F5' }}
            />

            <View style={styles.mainContent}>
                <Text style={[styles.content]} >Keep your apps safe from other with access to your computer.
                </Text>

                {!isValid && <Text style={[styles.errorMsg]}>{"\n"}Password is not match</Text>}

                <Text style={[isValid === true ? styles.name : { color: 'red' }]}>Password</Text>

                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    style={[isValid === true ? styles.textInput : styles.textInputInvalid]}
                    autoCapitalize="none"
                    onChangeText={(val) => handelChange(val, 'Password')}
                />
                
                <Text style={[isValid === true ? styles.name : { color: 'red' }]}>Confirm Password </Text>
                <TextInput
                    secureTextEntry={true}
                    placeholder='Confirm Password'
                    style={[isValid === true ? styles.textInput : styles.textInputInvalid]}
                    autoCapitalize="none"
                    onChangeText={(val) => handelChange(val, 'ConfirmPassword')}
                />

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={button ? styles.activeButton : styles.disabledButton} onPress={() => handlePress()} >
                        <Text style={styles.text}>Continue <Image
                            source={require('../../../../assets/forward.png')}
                        /> </Text>
                    </TouchableOpacity>
                    <Text> claudio@metapool.app</Text>
                </View>

                <View style={styles.TermContainer}>
                    <Text style={{ color: '#6F6E73', textAlign: 'center' }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        By creating a NEAR account, you agree to the NEAR Wallet<Text style={{ color: 'blue' }}> Terms of Service</Text> and <Text style={{ color: 'blue' }}>Privacy Policy</Text>.
                    </Text>
                </View>
            </View>
        </View >
    );
}

export default SecureAccountScreen;