import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ResturantDetail from './Screens/ResturantDetail';
import Home from './Screens/Home';


export default function RootNavigation(props) {
    const Stack = createStackNavigator();


    const screenOptions = {
        headerShown: false
    };


    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}