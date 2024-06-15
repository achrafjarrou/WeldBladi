// navigation/MainTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FindRideScreen from '../screens/FindRideScreen';
import PublishRideScreen from '../screens/PublishRideScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Your rides" component={YourRidesScreen} />
      <Tab.Screen name="Search" component={FindRideScreen} />
      <Tab.Screen name="Publish" component={PublishRideScreen} />
      <Tab.Screen name="Inbox" component={InboxScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default MainTabs;
