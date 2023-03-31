import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LotsOfImagesScreen from './src/LotsOfImagesScreen';
import HomeScreen from './src/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LotsOfImages" component={LotsOfImagesScreen} options={{ animation: 'slide_from_bottom' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


