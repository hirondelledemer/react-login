import React, { ReactNode, useState } from 'react';

const Tooltip = ({
  content,
  children,
}: {
  content: ReactNode;
  children: ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='relative inline-block'>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </div>
      {isHovered && (
        <p className='absolute flex items-center justify-center w-48 p-3 text-gray-600 -translate-x-1/2 bg-white rounded-lg shadow-lg -top-20 left-1/2 dark:shadow-none shadow-gray-200 dark:bg-gray-800 dark:text-white'>
          <span className='truncate'>{content}</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6 absolute rotate-45 -translate-x-1/2 left-1/2 bottom-0.5 -mb-3 transform text-white dark:text-gray-800 fill-current'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z'></path>
          </svg>
        </p>
      )}
    </div>
  );
};

export default Tooltip;
