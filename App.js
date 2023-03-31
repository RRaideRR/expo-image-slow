import * as React from 'react';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import LotsOfImagesExpoScreen from './src/LotsOfImagesExpoScreen';
import LotsOfImagesRNScreen from './src/LotsOfImagesRNScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LotsOfImagesExpo" component={LotsOfImagesExpoScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
        <Stack.Screen name="LotsOfImagesRN" component={LotsOfImagesRNScreen} options={{ ...TransitionPresets.ModalSlideFromBottomIOS }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


