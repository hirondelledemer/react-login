import React from 'react';

// todo: replace by nicer looking loader
const Skeleton: React.FC = () => {
  return (
    <div className='w-full max-w-md mx-auto animate-pulse p-9'>
      <h1 className='h-2 bg-gray-300 rounded-lg w-52'></h1>

      <p className='w-48 h-2 mt-6 bg-gray-200 rounded-lg'></p>
      <p className='w-full h-2 mt-4 bg-gray-200 rounded-lg'></p>
      <p className='w-64 h-2 mt-4 bg-gray-200 rounded-lg'></p>
      <p className='w-4/5 h-2 mt-4 bg-gray-200 rounded-lg'></p>
    </div>
  );
};

Skeleton.displayName = 'Skeleton';
export default Skeleton;
