import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigation} from './navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export default App;
