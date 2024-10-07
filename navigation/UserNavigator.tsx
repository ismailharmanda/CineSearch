import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, FavoritesScreen} from '../screens/';
import HomeIcon from '../assets/homeIcon/homeIcon.png';
import HomeIconActive from '../assets/homeIconActive/homeIconActive.png';
import FavoritesIcon from '../assets/favoritesIcon/favoritesIcon.png';
import FavoritedIcon from '../assets/favoritedIcon/favoritedIcon.png';
import {Image, ImageSourcePropType} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export const UserNavigator = () => {
  const HomeStackScreen = useMemo(() => {
    return () => {
      return (
        <Stack.Navigator
          screenOptions={{
            title: 'Home',
            headerShadowVisible: false,
            headerTitleStyle: {
              color: 'white',
            },
          }}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      );
    };
  }, []);

  const FavoritesStackScreen = useMemo(() => {
    return () => {
      return (
        <Stack.Navigator
          screenOptions={{
            title: 'Favorites',
          }}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="Favorites"
            component={FavoritesScreen}
          />
        </Stack.Navigator>
      );
    };
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          headerTitle: 'Home',
          headerShadowVisible: false,
          tabBarStyle: {
            backgroundColor: '#111111',
            borderBlockColor: '#111111',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerStyle: {
            backgroundColor: '#111111',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarShowLabel: false,
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? (HomeIconActive as ImageSourcePropType)
                  : (HomeIcon as ImageSourcePropType)
              }
            />
          ),
        }}
        name="HomeStack"
        component={HomeStackScreen}
      />
      <Tab.Screen
        options={{
          tabBarShowLabel: false,
          headerShadowVisible: false,
          tabBarLabel: 'Favorites',
          headerTitle: 'Favorites',
          tabBarStyle: {
            backgroundColor: '#111111',
            borderBlockColor: '#111111',
            justifyContent: 'center',
            alignItems: 'center',
          },
          headerStyle: {
            backgroundColor: '#111111',
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            color: 'white',
          },
          tabBarIcon: ({color, focused}) => (
            <Image
              source={
                focused
                  ? (FavoritedIcon as ImageSourcePropType)
                  : (FavoritesIcon as ImageSourcePropType)
              }
            />
          ),
        }}
        name="ProfileStack"
        component={FavoritesStackScreen}
      />
    </Tab.Navigator>
  );
};
