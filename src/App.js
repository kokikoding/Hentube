import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './screens/splashScreen';
import MainScreen from './screens/MainScreen';
import StreamScreen from './screens/streamScreen';

const Stack = createNativeStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Stream" component={StreamScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
