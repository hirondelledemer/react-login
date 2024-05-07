import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './app/Application';

createRoot(document.getElementById('app') as Element).render(<Application />);
