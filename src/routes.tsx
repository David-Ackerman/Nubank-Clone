import React from 'react';
import { View } from 'react-native';
import {} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Pages/Home';

// import { Container } from './styles';

const Stack = createStackNavigator();

const src: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default src;