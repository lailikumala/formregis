import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InformationA from '../screens/InformationA';
import InformationB from '../screens/InformationB';
import Confirmation from '../screens/Confirmation';
import SubmitSuccess from '../screens/SubmitSuccess';
const Stack = createStackNavigator();

const Router = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name='InformationA'
                component={InformationA}
                options={{headerShown: false}}
                exact
            />
            <Stack.Screen
                name='InformationB'
                component={InformationB}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Confirmation"
                component={Confirmation}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='SubmitSuccess'
                component={SubmitSuccess}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    )
}

export default Router;