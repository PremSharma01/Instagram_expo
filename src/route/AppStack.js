import React, { Component } from 'react'

import { NavigationContainer } from '@react-navigation/native';

import FirstStacks from './FirstStacks';

class AppStacks extends Component {

    render() {
        return (
            <NavigationContainer>
                <FirstStacks />
            </NavigationContainer>
        )
    }
}

export default AppStacks;