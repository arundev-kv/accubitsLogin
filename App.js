/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {
    StyleSheet,
} from 'react-native';

import Login from './src/Login';
import Dashboard from './src/Dashboard';
import { COLORS } from './src/colors/Colors';

const App = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Dashboard"
                    component={Dashboard}
                    options={{
                        headerTitleStyle: styles.headerText,
                        headerTintColor: COLORS.mainColor
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
const styles = StyleSheet.create({
    headerText: {
        color: COLORS.mainColor,
        fontFamily: 'Montserrat-Bold',
    }
});
export default App;
