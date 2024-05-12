import React from 'react';
import SortUpIcon from '../icons/SortUp';
import SortDownIcon from '../icons/SortDown';
import { SortDirection } from '@src/utils/types/sorting';
import { ACTIVE_ICON_COLOR } from '@src/utils/consts/colors';

interface SortButtonProps {
  direction?: SortDirection;
  active?: boolean;
}

export const sortUpTestId = 'sort-up-test-id';
export const sortDownTestId = 'sort-down-test-id';

const SortButton: React.FC<SortButtonProps> = ({
  direction = SortDirection.asc,
  active,
}) => {
  const color = active ? ACTIVE_ICON_COLOR : undefined;
  return direction === SortDirection.asc ? (
    <SortDownIcon testId={sortDownTestId} color={color} />
  ) : (
    <SortUpIcon testId={sortUpTestId} color={color} />
  );
};

export default SortButton;
