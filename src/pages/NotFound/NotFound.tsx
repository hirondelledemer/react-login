import Button from '@src/components/Button';
import ArrowLeft from '@src/components/icons/ArrowLeft';
import { HOME } from '@src/utils/consts/routes';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className='bg-white dark:bg-gray-900 '>
      <div className='container flex items-center min-h-screen px-6 py-12 mx-auto'>
        <div>
          <p className='text-sm font-medium text-blue-500 dark:text-blue-400'>
            404 error
          </p>
          <h1 className='mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl'>
            We can’t find that page
          </h1>
          <p className='mt-4 text-gray-500 dark:text-gray-400'>
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>

          <div className='flex items-center mt-6 gap-x-3'>
            <Button
              onClick={() => navigate(-1)}
              className='flex items-center justify-center'
            >
              <ArrowLeft />
              <span className='ml-4'>Go back</span>
            </Button>
            <Button onClick={() => navigate(HOME)}>Take me home</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
