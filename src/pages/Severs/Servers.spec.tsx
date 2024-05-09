import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Servers';
import { BrowserRouter } from 'react-router-dom';

describe('Servers', () => {
  it('should show login button', async () => {
    // todo: consider exporting browserRouter to utils folder
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );

    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });
});
