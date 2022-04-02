import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MemoLietScren from './src/screns/MemoListScreen';
// import MemoDetailScren from './src/screns/MemoDetailScreen';
// import MemoEditScreen from './src/screns/MemoEditScreen';
// import MemoCreateScreen from './src/screns/MemoCreateScreen';
// import LogInScreen from './src/screns/LogInScreen';
// import SignUpscreen from './src/screns/SignUpScreen';

const Stack = createStackNavigator();

// HTML的な記述
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MemoLietScren} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
