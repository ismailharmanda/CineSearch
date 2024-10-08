import React from 'react';

import {UserNavigator} from './UserNavigator';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <UserNavigator />
    </NavigationContainer>
  );
};
