import React from 'react';
import { render } from '@testing-library/react';
import ServersList from './ServersList';
import * as useServersHook from '@src/hooks/use-servers';
import { UseQueryResult } from '@tanstack/react-query';
import { serversData } from './ServersList.mocks';

describe('ServersList', () => {
  it('should show servers', () => {
    jest.spyOn(useServersHook, 'useServersList').mockImplementation(
      () =>
        ({
          data: serversData,
          isLoading: false,
          error: undefined,
        } as UseQueryResult<useServersHook.Server[], Error>),
    );
    render(<ServersList />);
    const rows = document.querySelectorAll('tr');
    expect(rows.length).toBe(8);
  });
});
