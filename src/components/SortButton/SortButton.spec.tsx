import React from 'react';
import { render, screen } from '@testing-library/react';
import SortButton, { sortDownTestId, sortUpTestId } from './SortButton';
import { SortDirection } from '@src/utils/types/sorting';

describe('SortButton', () => {
  describe('direction === asc', () => {
    it('should show SortDownIcon', () => {
      render(<SortButton direction={SortDirection.asc} />);
      const sortDownIcon = screen.getByTestId(sortDownTestId);
      expect(sortDownIcon).not.toBe(null);
    });
  });

  describe('direction === desc', () => {
    it('should show SortDownIcon', () => {
      render(<SortButton direction={SortDirection.desc} />);

      const sortUpIcon = screen.getByTestId(sortUpTestId);
      expect(sortUpIcon).not.toBe(null);
    });
  });
});
