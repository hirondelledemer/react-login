import React from 'react';
import SortUpIcon from '../icons/SortUp';
import SortDownIcon from '../icons/SortDown';

interface SortButtonProps {
  direction: 'asc' | 'desc'; // todo: extract
  active?: boolean;
}

export const sortUpTestId = 'sort-up-test-id';
export const sortDownTestId = 'sort-down-test-id';

const SortButton: React.FC<SortButtonProps> = ({ direction, active }) => {
  const color = active ? '#4287f5' : undefined;
  return direction === 'asc' ? (
    <SortDownIcon testId={sortDownTestId} color={color} />
  ) : (
    <SortUpIcon testId={sortUpTestId} color={color} />
  );
};

export default SortButton;
