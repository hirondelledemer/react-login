import { SortDirection } from '@src/utils/types/sorting';
import { useMemo, useState } from 'react';

interface SortConfig<T> {
  key: keyof T;
  direction: SortDirection;
}

export const useSortableData = <T extends { [K in keyof T]: T[K] }>(
  items: T[],
  config: SortConfig<T> | null,
) => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === SortDirection.asc ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === SortDirection.asc ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction = SortDirection.asc;
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === SortDirection.asc
    ) {
      direction = SortDirection.desc;
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};
