import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import styles from './OtpScreenStyles';
import { NavigationBar } from 'navigationbar-react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

/**
 * This is the OTP Verification screen.
 * This screen use as a 2FA verification. When user click on continue button on Main screen based on that 
 * particular response we need to show this screen and here we need to veriy the OTP and based on that particular 
 * response we need to move on.
 */
const OtpScreen = ({ navigation, route }) => {

    /**
     * This is the state declaration for this particulare page.
     */
    const { label, isEmail } = route.params;

    const [data, setData] = React.useState({
        otp: '',
        disabledButton: true,
        loading: false
    });

    /**
     * This function is responsible for verifing the OTP and validate the state variable.
     */
    const verifyOTP = (code) => {
        if(code.length > 0) {
            setData({
                ...data,
                otp:code,
                disabledButton:false
            })
        }        
    }

    /**
     * Here we will call the Validate OTP api and based on that response we will call the next screen 
     * or else show the error message to the users.
     */
    const submitOTP = () => {
        navigation.navigate("NEARAccountScreen")
    }

    const ComponentCenter = () => {
        return (
            <View style={styles.navigationBar}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Verification</Text>
                <Image
                    source={require('../../../../assets/close.png')}
                    style={styles.closeButton}
                />
            </View>
        );
    };

    /**
     * This is actual render method for the Verify OTP screen.
     */
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F5F5F5' />

            <NavigationBar
                componentCenter={() => <ComponentCenter />}
                navigationBarStyle={{ backgroundColor: '#F5F5F5' }}
            />
            <View style={styles.headText}>
                <Text style={styles.textStyle}>We've sent a 6-digit verification code to {isEmail ? "the email address" : "your phone"}</Text>
                <Text style={styles.linkStyle}>{label}</Text>
            </View>
            <View style={styles.contentView}>
                <Text style={styles.textStyle}>Enter verification code</Text>
                <OTPInputView
                    style={{ width: '80%', height: 200 }}
                    pinCount={6}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(code) => {
                        console.log(`Code is ${code}, you are good to go!`)
                        verifyOTP(code);
                    }}
                />
                <View style={styles.continueButtonView}>
                    <TouchableOpacity style={data.disabledButton ? styles.disabledButton : styles.activeButton}
                        onPress={submitOTP}    
                    >
                        <View>
                            <Text style={styles.continueText}> {"Continue"}</Text>
                            <Image style={styles.forwardArrow} source={require("../../../../assets/forward.png")} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Text style={{ marginTop: 25, fontSize: 17 }} >Didn't receive your code?</Text>
                <Text style={styles.linkStyle}>Send to a different {isEmail ? "email address" : "phone number"}</Text>
                <Text style={styles.linkStyle}>Resend your code </Text>
            </View>
        </View>
    );
};

export default OtpScreen;
