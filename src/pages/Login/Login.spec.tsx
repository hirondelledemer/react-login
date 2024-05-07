import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('should username and password inputs', async () => {
    render(<Login />);

    const userNameInput = screen.getByRole('textbox', { name: /username/i });
    // currently password input has no role: issue for reference:
    // https://github.com/testing-library/dom-testing-library/issues/1128
    const passwordInput = document.querySelector('input[type="password"]');

    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});
