import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from './screens/home';
import Municipio from './screens/municipio';

import {ThemeProvider} from 'styled-components';

const Stack = createNativeStackNavigator();

const Stacks = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'tomato'},
          headerTintColor: 'white',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Municipio" component={Municipio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacks;
