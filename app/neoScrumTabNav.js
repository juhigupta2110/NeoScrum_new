import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NeoScrumStackNav from './neoScrumStackNav';

import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';

// import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const NeoScrumTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="NeoScrumStackNav" component={NeoScrumStackNav} />
    </Tab.Navigator>
  );
};

export default NeoScrumTabNav;
