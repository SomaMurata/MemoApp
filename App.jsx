import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';

import MemoLietScren from './src/screns/MemoListScreen';
import MemoDetailScren from './src/screns/MemoDetailScreen';
import MemoEditScreen from './src/screns/MemoEditScreen';
import MemoCreateScreen from './src/screns/MemoCreateScreen';
import LogInScreen from './src/screns/LogInScreen';
import SignUpscreen from './src/screns/SignUpScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.app.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();
LogBox.ignoreLogs(['AsyncStorage']);

// HTML的な記述
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#ffffff' },
          headerTitle: 'Memo App',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoList" component={MemoLietScren} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScren} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpscreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
