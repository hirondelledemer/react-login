import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ServersList from './ServersList';
import * as useServersHook from '@src/hooks/use-servers';
import { UseQueryResult } from '@tanstack/react-query';
import { serversData } from './ServersList.mocks';
import { sortDownTestId, sortUpTestId } from '../SortButton/SortButton';

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

  describe('sorting', () => {
    it('should sort by name', () => {
      jest.spyOn(useServersHook, 'useServersList').mockImplementation(
        // todo: look into reseting
        () =>
          ({
            data: serversData,
            isLoading: false,
            error: undefined,
          } as UseQueryResult<useServersHook.Server[], Error>),
      );
      render(<ServersList />);
      const rows = document.querySelectorAll('tr');
      expect(rows[1].textContent).toBe('Server 15');
      expect(rows[2].textContent).toBe('Server 210');
      expect(rows[3].textContent).toBe('Server 36');
      expect(rows[4].textContent).toBe('Server 47');
      expect(rows[5].textContent).toBe('Server 52');
      expect(rows[6].textContent).toBe('Server 612');
      expect(rows[7].textContent).toBe('Server 75');

      const sortNameButtonAsc = screen.getAllByTestId(sortUpTestId)[0];
      fireEvent.click(sortNameButtonAsc);

      const sortNameButtonDesc = screen.getAllByTestId(sortDownTestId)[0];
      fireEvent.click(sortNameButtonDesc);
      expect(rows[1].textContent).toBe('Server 75');
      expect(rows[2].textContent).toBe('Server 612');
      expect(rows[3].textContent).toBe('Server 52');
      expect(rows[4].textContent).toBe('Server 47');
      expect(rows[5].textContent).toBe('Server 36');
      expect(rows[6].textContent).toBe('Server 210');
      expect(rows[7].textContent).toBe('Server 15');
    });

    it('should sort by distance', () => {
      jest.spyOn(useServersHook, 'useServersList').mockImplementation(
        // todo: look into reseting
        () =>
          ({
            data: serversData,
            isLoading: false,
            error: undefined,
          } as UseQueryResult<useServersHook.Server[], Error>),
      );
      render(<ServersList />);
      const rows = document.querySelectorAll('tr');

      const sortDistanceButtonAsc = screen.getAllByTestId(sortUpTestId)[1];
      fireEvent.click(sortDistanceButtonAsc);
      expect(rows[1].textContent).toBe('Server 52');
      expect(rows[2].textContent).toBe('Server 15');
      expect(rows[3].textContent).toBe('Server 75');
      expect(rows[4].textContent).toBe('Server 36');
      expect(rows[5].textContent).toBe('Server 47');
      expect(rows[6].textContent).toBe('Server 210');
      expect(rows[7].textContent).toBe('Server 612');

      const sortDistanceButtonDesc = screen.getAllByTestId(sortDownTestId)[1];
      fireEvent.click(sortDistanceButtonDesc);
      expect(rows[1].textContent).toBe('Server 612');
      expect(rows[2].textContent).toBe('Server 210');
      expect(rows[3].textContent).toBe('Server 47');
      expect(rows[4].textContent).toBe('Server 36');
      expect(rows[5].textContent).toBe('Server 15');
      expect(rows[6].textContent).toBe('Server 75');
      expect(rows[7].textContent).toBe('Server 52');
    });
  });
});
