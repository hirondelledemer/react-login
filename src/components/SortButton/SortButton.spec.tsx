import React from 'react';
import { render, screen } from '@testing-library/react';
import SortButton, { sortDownTestId, sortUpTestId } from './SortButton';

describe('SortButton', () => {
  describe('direction === asc', () => {
    it('should show SortDownIcon', () => {
      render(<SortButton direction='asc' />);
      const sortDownIcon = screen.getByTestId(sortDownTestId);
      expect(sortDownIcon).not.toBe(null);
    });
  });

  describe('direction === desc', () => {
    it('should show SortDownIcon', () => {
      render(<SortButton direction='desc' />);

      const sortUpIcon = screen.getByTestId(sortUpTestId);
      expect(sortUpIcon).not.toBe(null);
    });
  });
});
