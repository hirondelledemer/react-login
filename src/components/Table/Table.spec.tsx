import '@testing-library/jest-dom';

import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Table from './Table';
import { sortDownTestId, sortUpTestId } from '../SortButton/SortButton';
import { columns, extendedData, miniData } from './Table.mocks';

describe('Table', () => {
  it('should render data', async () => {
    render(<Table pageSize={10} columns={columns} data={miniData} />);

    const rows = document.querySelectorAll('tr');
    expect(rows[1].textContent).toBe('data 1data 2');
    expect(rows[2].textContent).toBe('data 3data 4');
  });

  describe('sorting', () => {
    it('should sort by column', () => {
      render(<Table pageSize={10} columns={columns} data={miniData} />);

      const rows = document.querySelectorAll('tr');
      const sortNameButtonAsc = screen.getAllByTestId(sortUpTestId)[0];

      fireEvent.click(sortNameButtonAsc);

      const sortNameButtonDesc = screen.getAllByTestId(sortDownTestId)[0];
      fireEvent.click(sortNameButtonDesc);

      expect(rows[1].textContent).toBe('data 3data 4');
      expect(rows[2].textContent).toBe('data 1data 2');
    });
  });

  describe('pagination', () => {
    it.only('should show data divided per pages', () => {
      render(<Table pageSize={5} columns={columns} data={extendedData} />);

      const rows = document.querySelectorAll('tr');
      expect(rows[1].textContent).toBe('data 1data 2');
      expect(rows[2].textContent).toBe('data 3data 4');
      expect(rows[3].textContent).toBe('data 5data 6');
      expect(rows[4].textContent).toBe('data 7data 8');
      expect(rows[5].textContent).toBe('data 9data 10');

      const buttons = screen.queryAllByRole('button');
      const secondPageButton = buttons[4];
      fireEvent.click(secondPageButton);

      expect(rows[1].textContent).toBe('data 11data 12');
      expect(rows[2].textContent).toBe('data 13data 14');
      expect(rows[3].textContent).toBe('data 15data 16');
      expect(rows[4].textContent).toBe('data 17data 18');
      expect(rows[5].textContent).toBe('data 19data 20');

      const thirdPageButton = buttons[5];
      fireEvent.click(thirdPageButton);

      expect(rows[1].textContent).toBe('data 21data 22');
      expect(rows[2].textContent).toBe('data 23data 24');
      expect(rows[3].textContent).toBe('data 25data 26');
    });

    it('should show appropriate amount of pages', () => {
      render(<Table pageSize={5} columns={columns} data={extendedData} />);

      const buttons = screen.queryAllByRole('button');

      expect(buttons[2].textContent).toBe('Prevous');
      expect(buttons[3].textContent).toBe('1');
      expect(buttons[4].textContent).toBe('2');
      expect(buttons[5].textContent).toBe('3');
      expect(buttons[6].textContent).toBe('Next');
    });

    it('should not show "previous" on first page', () => {
      render(<Table pageSize={5} columns={columns} data={extendedData} />);

      const buttons = screen.queryAllByRole('button');

      expect(buttons[2]).toHaveClass('invisible');
      expect(buttons[3]).not.toHaveClass('invisible');
      expect(buttons[4]).not.toHaveClass('invisible');
      expect(buttons[5]).not.toHaveClass('invisible');
      expect(buttons[6]).not.toHaveClass('invisible');
    });

    it('should not show "next" on last page', () => {
      render(<Table pageSize={5} columns={columns} data={extendedData} />);

      const buttons = screen.queryAllByRole('button');

      const lastPageButton = buttons[5];
      fireEvent.click(lastPageButton);

      expect(buttons[2]).not.toHaveClass('invisible');
      expect(buttons[3]).not.toHaveClass('invisible');
      expect(buttons[4]).not.toHaveClass('invisible');
      expect(buttons[5]).not.toHaveClass('invisible');
      expect(buttons[6]).toHaveClass('invisible');
    });
  });
});
