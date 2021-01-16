import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    Dimensions,
    Keyboard,
    TouchableOpacity,
} from 'react-native';
import { COLORS } from './colors/Colors';

const Dashboard = ({ route }) => {

    const { username } = route.params;
    return (
        <View style={styles.container}>
            <Image source={require('./assets/logo_highres.jpg')} resizeMode='cover' style={styles.logo} />
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.username} >{username}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    welcome: {
        fontFamily: 'Montserrat-Bold',
        color: COLORS.mainColor,
        fontSize: 24
    },
    logo: {
        height: 120,
        width: 120,
    },
    username: {
        fontSize: 22,
        fontFamily: 'Montserrat-BoldItalic',
        color: COLORS.mainColor,
    },
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center'
    }

});
export default Dashboard;