import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
Feather.loadFont();
MCIcons.loadFont();

const Tabs = createBottomTabNavigator();

import GithubScreen from './pages/Github';
import CodeNativeScreen from './pages/CodeNative';

const icons = {
  Github: {
    lib: Feather,
    name: 'github',
  },
  CodeNative: {
    lib: MCIcons,
    name: 'language-java',
  },
};

export default function Routes() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size, focused}) => {
          const {lib: Icon, name} = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        activeTintColor: 'green',
        inactiveTintColor: '#000',
      }}>
      <Tabs.Screen
        name="Github"
        component={GithubScreen}
        options={{title: 'Github'}}
      />
      <Tabs.Screen
        name="CodeNative"
        component={CodeNativeScreen}
        options={{title: 'Código Nativo'}}
      />
    </Tabs.Navigator>
  );
}
