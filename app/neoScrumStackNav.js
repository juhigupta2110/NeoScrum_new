import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SplashScreen from './screens/splashScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import FeedbackScreen from '../app/screens/feedbackScreen';
import AddFeedbackScreen from './screens/addFeedbackScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Header from '../app/components/header';
import {View} from 'react-native-animatable';

const Stack = createNativeStackNavigator();

class NeoScrumSplashStackNav extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{}}>
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }
}

class NeoScrumStackNav extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="FeedbackScreen" screenOptions={{}}>
        <Stack.Screen
          name="AddFeedbackScreen"
          component={AddFeedbackScreen}
          options={{
            header: (props) => <Header {...props} />,
            headerLeft: () => <></>,
            headerRight: () => <></>,
          }}
        />

        <Stack.Screen
          name="FeedbackScreen"
          component={FeedbackScreen}
          options={{
            header: (props) => <Header {...props} />,
            headerLeft: () => <></>,
            headerRight: () => <></>,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export {NeoScrumStackNav, NeoScrumSplashStackNav};
