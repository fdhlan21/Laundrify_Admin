// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HalamanHome from '../../pages/Home';
import HalamanProgres from '../../pages/Progres';


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{headerShown:false}}/>
         <Stack.Screen name="HalamanProgres" component={HalamanProgres} options={{headerShown:false}}/>
      </Stack.Navigator>

  );
}

export default MyStack;