import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Navigation} from './navigation/Navigation';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
    </QueryClientProvider>
  );
}

export default App;
