import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import styles from './SeedPhraseScreenStyles';
import { NavigationBar } from 'navigationbar-react-native';

/**
 * This Seed Pharse Screen
 * Here user will reset the password or remember easily.
 */
const SeedPhraseScreen = ({ navigation }) => {

    /**
     * This portion is for state declaration for this entrie page.
     */
    const data = ['gather', 'engage', 'father', 'plant', 'indego', 'dental', 'sick', 'fungus', 'river', 'morning', 'love', 'cow']

    const ComponentCenter = () => {
        return (
            <View style={styles.navigationBar}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Secure your account</Text>
                <Image
                    source={require('../../../../assets/close.png')}
                    style={styles.closeButton}
                />
                <View style={styles.line} />
            </View>
        );
    };

    /**
     * This one is render of this particular page.
     */
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#F5F5F5' />

            <NavigationBar
                componentCenter={() => <ComponentCenter />}
                navigationBarStyle={{ backgroundColor: '#F5F5F5' }}
            />
            <View style={styles.headText}>
                <Text style={styles.textStyle}>Keep your apps safe from other with access to</Text>
                <Text style={styles.textStyle}>your computer.</Text>
            </View>
            <View style={styles.contentView}>
                <Text style={[styles.textStyle, { fontWeight: 'bold', fontSize: 18 }]}>Seed phrase</Text>
                <View style={styles.pharseBox}>
                    {
                        data.map((item, index) => {
                            return <TouchableOpacity key={index}>
                                <View style={styles.innerBox}>
                                    <Text style={styles.numberBox}>{index + 1}</Text>
                                    <Text style={{ marginLeft: 10 }}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        })
                    }
                </View>
                <Image style={{ marginTop: 35, width: 200, height: 30, resizeMode: 'contain' }} source={require('../../../../assets/copySeed.png')} />

                <TouchableOpacity style={styles.nearButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <View>
                        <Text style={styles.nearText}> {"Continue to Log in"}</Text>
                        <Image style={styles.nearForwardArrow} source={require("../../../../assets/forward.png")} />
                    </View>
                </TouchableOpacity>
            </View>
        </View >
    );
};

export default SeedPhraseScreen;
