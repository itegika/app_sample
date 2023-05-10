import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TodayScreen from 'screens/Today';
import HistoryScreen from 'screens/History';
import {getTabBarIcon, tabBarOptions} from './navigationOptions';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => getTabBarIcon({route, focused}),
        ...tabBarOptions,
      })}
    >
      <Tab.Screen name="Today" component={TodayScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};
