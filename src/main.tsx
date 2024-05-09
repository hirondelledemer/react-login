import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './app/Application';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('app') as Element).render(
  <QueryClientProvider client={queryClient}>
    <Application />
  </QueryClientProvider>,
);
