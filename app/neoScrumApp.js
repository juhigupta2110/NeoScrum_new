import React, {Component} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from './screens/splashScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import FeedbackScreen from '../app/screens/feedbackScreen';
import AddFeedbackScreen from './screens/addFeedbackScreen';
import DrawableContent from '../app/components/drawableContent';
import Header from '../app/components/header';
import Icons from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {globalStyles} from './style/global/globalStyles';
import {Colors} from '../app/style/colors/colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const NeoScrumApp = () => {
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
      <Stack.Screen
        name="RootDrawerNav"
        component={RootDrawerNav}
        options={{
          header: (props) => <Header {...props} />,
          headerLeft: () => <></>,
          headerRight: () => <></>,
        }}
      />
      <Stack.Screen
        name="RootTabNav"
        component={RootTabNav}
        options={{
          header: (props) => <Header {...props} />,
          headerLeft: () => <></>,
          headerRight: () => <></>,
        }}
      />
    </Stack.Navigator>
  );
};

const RootDrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerStyle={globalStyles.drawerNavigatorStyle}
      initialRouteName="RootTabNav"
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <DrawableContent {...props} />}>
      <Drawer.Screen
        name="RootTabNav"
        component={RootTabNav}
        options={{
          headerShown: false,
          header: (props) => <Header />,
          headerLeft: () => <></>,
          headerRight: () => <></>,
        }}
      />
    </Drawer.Navigator>
  );
};

const RootTabNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedbackScreen"
      activeColor={Colors.WHITE}
      shifting={true}
      labeled={true}
      inactiveColor={Colors.BLACK}
      barStyle={{
        backgroundColor: Colors.GREEN,
      }}>
      <Tab.Screen
        name="FeedbackScreen"
        component={FeedbackScreen}
        options={{
          headerShown: false,

          title: 'Feedbacks',
          tabBarColor: Colors.GREEN,
          tabBarIcon: ({color}) => (
            <Icons
              size={hp('2.875%')}
              color={color}
              type="feather"
              name="file-text"
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddFeedbackScreen"
        component={AddFeedbackScreen}
        options={{
          headerShown: false,

          title: 'Add Feedback',
          tabBarColor: Colors.tabYellowColor,
          tabBarIcon: ({color}) => (
            <Icons size={hp('3%')} color={color} type="feather" name="edit" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default NeoScrumApp;
