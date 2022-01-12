
import { NavigationBar } from 'navigationbar-react-native';
import React, { useState } from 'react';
import { Text, TextInput, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Linking } from 'react-native';
import styles from './NEARAccountScreenStyles';

/**
 * This is Near Account Screen
 * In this screen we have design the registration flow based on user actions.
 */

const NEARAccountScreen = ({ navigation }) => {

    /**
     * This is the state configuration for this particular page.
     */
    const [data, setData] = useState({})
    const [isValid, setIsValid] = useState(true)
    const [button, setButton] = useState(false)


    /**
     * This function is responsible for saving data for particular field into state.
     */
    const handelChange = (e, name) => {
        setData({
            ...data,
            [name]:e
        })
        if (data.name && data.id) {
            setButton(true)
        } else {
            setButton(false)
        }
    }

    /**
     * This function call when someone click Continue button. 
     * Here we need to validate the data based on actual requirement. 
     * Then after we need to call the backend api and based on that response we 
     * need to show the error message or redirect them into new page.
     */
    const handlePress = () => {
        if ((data.name !== '' || data.id !== '') && (data.name !== undefined || data.id !== undefined)) {
            setIsValid(true)
        } else {
            setIsValid(false)
        }
        navigation.navigate("SecureAccountScreen")
    }

    /**
     * This is the general navigation component. 
     */
    const ComponentCenter = () => {
        return (
            <View style={styles.navigationBar}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Verification</Text>
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
                <Text style={[styles.content]} >Enter an Account ID to use with your NEAR account. Your Account ID will be used for all NEAR operations, including sending and receiving assets.
                </Text>

                <Text style={[isValid === true ? styles.name : { color: 'red' }]}>Full Name</Text>

                <TextInput
                    placeholder='Ex. John doe'
                    style={[isValid === true ? styles.textInput : styles.textInputInvalid]}
                    autoCapitalize="none"
                    onChangeText={(val) => handelChange(val, 'id')}
                />
                {!isValid && <Text style={[styles.errorMsg]}>Full Name is not valid</Text>}

                <Text style={[isValid === true ? styles.name : { color: 'red' }]}>Account ID <Image
                    style={styles.dismiss}
                    source={require('../../../../assets/vector.png')}
                /></Text>
                <View style={styles.combineText}>
                    <TextInput
                        style={styles.textBox1}
                    />
                    <TextInput
                        style={styles.textBox2}
                        defaultValue='.near' editable={false} selectTextOnFocus={false} />
                </View>
                {!isValid && <Text style={[styles.errorMsg]}>Account ID not valid</Text>}

                <View style={styles.btncontainer}>
                    <TouchableOpacity style={button === true ? styles.continueBtnTrue : styles.continueBtn} onPress={() => handlePress()} >
                        <Text style={styles.text}>Continue <Image
                            source={require('../../../../assets/forward.png')}
                        /> </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.TermContainer}>
                    <Text style={{ color: '#6F6E73', textAlign: 'center' }}
                        onPress={() => Linking.openURL('http://google.com')}>
                        By creating a NEAR account, you agree to the NEAR Wallet<Text style={{ color: 'blue' }}> Terms of Service</Text> and <Text style={{ color: 'blue' }}>Privacy Policy</Text>.
                    </Text>
                </View>

            </View>
            <View
                style={{
                    borderBottomColor: '#DFDFE0',
                    borderBottomWidth: 1,
                    marginLeft: 5,
                    marginRight: 5
                }}
            />
            <View style={styles.LoginContent}>
                <Text style={{ color: 'black', marginBottom: 20 }}
                    onPress={() => Linking.openURL('http://google.com')}>
                    Already have NEAR account?
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => handlePress()} >
                    <Text style={styles.text}>Log in with NEAR  <Image
                        source={require('../../../../assets/forward.png')}
                    /> </Text>
                </TouchableOpacity>
            </View>

        </View >
    );
}

export default NEARAccountScreen;