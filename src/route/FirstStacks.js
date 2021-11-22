import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function FirstStacks() {

    return (
        <Stack.Navigator initialRouteName='LoginScreen'>

            <Stack.Screen
                name='Instagram'
                component={Home}
                options={{
                    title: 'Instagram',
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    )
}