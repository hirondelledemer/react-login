import { ColumnProps } from './Table';

interface MockData {
  column1: string;
  column2: string;
}

export const columns: ColumnProps<MockData>[] = [
  { key: 'column1', title: 'Column 1' },
  { key: 'column2', title: 'Column 2' },
];

export const miniData: MockData[] = [
  { column1: 'data 1', column2: 'data 2' },
  { column1: 'data 3', column2: 'data 4' },
];

export const extendedData: MockData[] = [
  { column1: 'data 1', column2: 'data 2' },
  { column1: 'data 3', column2: 'data 4' },
  { column1: 'data 5', column2: 'data 6' },
  { column1: 'data 7', column2: 'data 8' },
  { column1: 'data 9', column2: 'data 10' },
  { column1: 'data 11', column2: 'data 12' },
  { column1: 'data 13', column2: 'data 14' },
  { column1: 'data 15', column2: 'data 16' },
  { column1: 'data 17', column2: 'data 18' },
  { column1: 'data 19', column2: 'data 20' },
  { column1: 'data 21', column2: 'data 22' },
  { column1: 'data 23', column2: 'data 24' },
  { column1: 'data 25', column2: 'data 26' },
];
