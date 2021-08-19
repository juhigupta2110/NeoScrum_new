import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import FeedbackScreen from '../screens/feedbackScreen';
import SplashScreen from '../screens/splashScreen';

const Tab = createMaterialBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FeedbackScreen" component={FeedbackScreen} />
      <Tab.Screen name="SplashScreen" component={SplashScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
