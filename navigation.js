import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ResturantDetail from './Screens/ResturantDetail';
import Home from './Screens/Home';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './Redux/store'

const store = configureStore()



const screenOptions = {
    headerShown: false,
};


export default function RootNavigation(props) {
    const Stack = createStackNavigator();




    return (
        <ReduxProvider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
                </Stack.Navigator>
            </NavigationContainer>
        </ReduxProvider>

    )
}