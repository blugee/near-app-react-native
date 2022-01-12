import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image,
    Alert,
    TextInput
} from 'react-native';
import styles from './MainScreenStyles';
import { NavigationBar } from 'navigationbar-react-native';
import * as Animatable from 'react-native-animatable';


/**
 * This is the Main Screen (Login screen)
 * In this screen we write the logic for login and their api.
 * Once user enter the email or phone we need to call API from here and then if login successful we need to redirect
 * them into OTP verification page.
 */
const MainScreen = ({ navigation }) => {

    /**
     * This is the state object or declaration for this entire page. 
     * Whenever you need any variable you can come here and declare the variable and create the method. 
     * Later you can use that varaible entire the page.
     */
    const [data, setData] = React.useState({
        isEmail: false,
        username: '',
        disabledButton: true,
        isValidEmail:false,
        isValidMobile:false,
        loading: false
    });

    
    /**
     * This function is validate the mobile number.
     */
    const validateMobile = (mobile_number) => {
        var mob_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if (mob_regex.test(mobile_number)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * This function is called when user enter some values into Phone Textbox
     * We will verify weather mobile number is valid or not.
     */
    const onPhoneChange = (phone) => {

        if (validateMobile(phone)) {
            setData({
                ...data,
                username: phone,
                isValidMobile: true,
                disabledButton: false
            });
        } else {
            setData({
                ...data,
                username: phone,
                isValidMobile: false,
                disabledButton: true
            });
        }
    }

    /**
     * This function is call when user enter any value in Email input.
     * Using the regular expression we will verify weather email format is valid or not.
     * If not valid then we promt for the error.
     */
    const onEmailChange = (email) => {

        const emailRegEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (emailRegEx.test(email)) {
            setData({
                ...data,
                username:email,
                isValidEmail: true,
                disabledButton: false
            });
        }else {
            setData({
                ...data,
                isValidEmail: false,
                disabledButton: true
            });
        }
    }

    /**
     * This function call when user click on Continue button on login screen.
     * Here we need to call the API. 
     * Once we get the response from API. Based on that we need to check the status and redirect user into next screen.
     */
    const onContinuePress = () => {
        Alert.alert("OTP Sent");
        navigation.navigate('OtpScreen',  {label: data.username, isEmail: data.isEmail})
    }

    /**
     * This function is called when user change the Login option either email or phone
     * We are reseting the value for every input when user change the tab.
     */
    const onClickLoginAction = (isEmail) => {
        setData({
            ...data,
            isEmail: isEmail,
            disabledButton:true,
            isValidEmail:false,
            isValidMobile:false
        })
    }

    /**
     * 
     * This function is use for the nav bar.
     */
     const ComponentCenter = () => {
        return (
            <View>
                <Image
                    source={require('../../../../assets/logo.png')}
                    style={{ resizeMode: 'contain', width: 180, height: 35 }}
                />
            </View>
        );
    };

    /**
     * This is the render method for the MainScreen.
     * Here we write the logic for entire HTML file.
     */
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F5F5F5' />

            <NavigationBar
                componentCenter={ComponentCenter}
                navigationBarStyle={{ backgroundColor: '#F5F5F5' }}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity  onPress={() => onClickLoginAction(true)}>
                    <Text style={data.isEmail ? [styles.onButton, styles.phoneOffButton] : [styles.offButton, styles.phoneOffButton]}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onClickLoginAction(false)}>
                    <Text style={data.isEmail ? styles.offButton : styles.onButton} >Phone</Text>
                </TouchableOpacity>

            </View>

            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.fadeInUpBig]}
            >
                {data.isEmail ? (
                    <View style={styles.fadeInAction}>
                        <TextInput
                            placeholder="johndoe@gmail.com"
                            placeholderTextColor="#999999"
                            style={data.isValidEmail ? styles.textInput : styles.invalidTextInput}
                            autoCapitalize="none"
                            onChangeText={(val) => onEmailChange(val)}
                        />
                    </View>
                ) : (
                    <View style={styles.fadeInAction}>
                        <TextInput
                            placeholder="Ex (337) 378 8383"
                            placeholderTextColor="#999999"
                            style={data.isValidMobile ? styles.textInput : styles.invalidTextInput}
                            autoCapitalize="none"
                            onChangeText={(val) => onPhoneChange(val)}
                        />
                    </View>
                )}

                <View style={styles.continueButtonView}>
                    <TouchableOpacity disabled={data.disabledButton} style={data.disabledButton ? styles.disabledButton : styles.activeButton} onPress={onContinuePress}>
                        <View>
                            <Text style={styles.continueText}> {"Continue"}</Text>
                            <Image style={styles.forwardArrow} source={require("../../../../assets/forward.png")} />
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.agreeText}>
                    <Text style={styles.agreeText1}>by clicking continue you must agee to near labs</Text>

                    <Text style={styles.privacyBlock}>
                        <Text style={styles.termsConditionText}>Terms {'&'} Conditions</Text>
                        <Text style={styles.andText}> and </Text>
                        <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
                    </Text>

                    <View style={styles.lineSeparator} />

                    <Text style={styles.alreadyHaveAccountText}>Already have NEAR account?</Text>

                    <TouchableOpacity style={styles.nearButton}>
                        <View>
                            <Text style={styles.nearText}> {"Log in with NEAR"}</Text>
                            <Image style={styles.nearForwardArrow} source={require("../../../../assets/forward.png")} />
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

        </View>
    );
};

export default MainScreen;
