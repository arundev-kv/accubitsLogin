import React, { useState, useRef } from 'react';
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
    Alert,
    KeyboardAvoidingView,
} from 'react-native';
import { COLORS } from './colors/Colors'

const Login = ({ navigation }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const usernameRef = useRef(null);
    const inputRef = useRef(null);
    const login = async () => {
        if (username !== '' && password !== '') {
            Keyboard.dismiss();
            usernameRef.current.clear();
            inputRef.current.clear();
            navigation.navigate('Dashboard', { username });
        } else {
            Alert.alert('Please enter all fields');
        }

    }
    return (
        <KeyboardAvoidingView behavior='height'>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.mainColor} />
            <SafeAreaView >
                <View style={styles.wrapper}>
                    <ScrollView
                        contentInsetAdjustmentBehavior='automatic'
                        contentContainerStyle={styles.scrollView}>
                        <View style={styles.formWrapper}>
                            <Image source={require('./assets/logo_highres.jpg')} resizeMode='cover' style={styles.logo} />
                            <Text style={styles.heading}> Login </Text>
                            <TextInput
                                ref={usernameRef}
                                placeholder='USERNAME'
                                placeholderTextColor={COLORS.mainColor}
                                value={username}
                                onChangeText={(username) => setUsername(username)}
                                label='Email'
                                style={styles.input}
                            />
                            <TextInput
                                ref={inputRef}
                                placeholder='PASSWORD'
                                placeholderTextColor={COLORS.mainColor}
                                value={password}
                                onChangeText={(password) => setPassword(password)}
                                label='Password'
                                secureTextEntry={true}
                                style={styles.input}
                            />
                            <TouchableOpacity
                                style={styles.button}
                                onPress={login}
                            >
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: COLORS.mainColor,
        padding: 16,
        height: Dimensions.get('screen').height
    },
    formWrapper: {
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        overflow: 'hidden'
    },
    logo: {
        height: 120,
        width: 120,
    },
    heading: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20
    },
    button: {
        alignItems: 'center',
        backgroundColor: COLORS.mainColor,
        padding: 16,
        marginVertical: 16
    },
    buttonText: {
        fontFamily: 'Montserrat-Bold',
        color: COLORS.white,
    },
    input: {
        width: '80%',
        height: 70,
        padding: 16,
        borderWidth: 1,
        borderColor: COLORS.mainColor,
        borderRadius: 4,
        marginVertical: 10,
    },
    inputext: {
        width: 200,
        height: 44,
        padding: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});


export default Login;