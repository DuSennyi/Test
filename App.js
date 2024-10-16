import 'react-native-gesture-handler'; // Import phải đứng đầu tiên
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import LoginScreen from './LoginScreen'; // Đường dẫn tới file LoginScreen.js

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Ẩn thanh tiêu đề
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
