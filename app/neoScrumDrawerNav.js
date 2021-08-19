import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from './screens/splashScreen';
import SignInScreen from './screens/signInScreen';
import SignUpScreen from './screens/signUpScreen';
import FeedbackScreen from '../app/screens/feedbackScreen';
import AddFeedbackScreen from './screens/addFeedbackScreen';

const Drawer = createDrawerNavigator();
const NeoScrumDrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="SplashScreen" component={SplashScreen} />

      <Drawer.Screen name="FeedbackScreen" component={FeedbackScreen} />
    </Drawer.Navigator>
  );
};
export default NeoScrumDrawerNav;
