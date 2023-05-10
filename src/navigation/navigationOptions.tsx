import React from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import Today from 'assets/icons/Today.svg';
import History from 'assets/icons/History.svg';
import colors from 'constants/colors';
import {NavigationOptionsProps} from 'types/types';

export const getTabBarIcon = ({route, focused}: NavigationOptionsProps) => {
  let icon: null | JSX.Element = null;
  if (route.name === 'Today') {
    icon = <Today color={focused ? colors.activeViolet : colors.gray} />;
  } else if (route.name === 'History') {
    icon = <History color={focused ? colors.activeViolet : colors.gray} />;
  }
  return icon;
};

export const tabBarOptions: BottomTabNavigationOptions = {
  tabBarActiveTintColor: colors.activeViolet,
  tabBarInactiveTintColor: colors.gray,
  tabBarStyle: {
    backgroundColor: colors.white,
    borderTopColor: colors.lightGray,
    borderTopWidth: 1,
    height: '10%',
    paddingVertical: 10,
    paddingHorizontal: '25%',
  },
  headerStyle: {
    backgroundColor: colors.white,
    height: 136,
    borderBottomColor: colors.lightGray,
    borderBottomWidth: 1,
  },
  headerTitleStyle: {
    marginTop: 64,
    color: colors.black,
    fontFamily: 'Inter Bold',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 48,
  },
};
