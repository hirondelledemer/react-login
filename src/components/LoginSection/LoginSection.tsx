import React from 'react';

import LoginForm from '../LoginForm';

const LoginSection: React.FC = () => {
  return (
    <section className='bg-white min-h-screen' role='main'>
      <div className='container px-6 py-24 mx-auto lg:py-32 min-h-80'>
        <div className='lg:flex'>
          <div className='lg:w-1/2'>
            <img className='w-auto h-10 xl:h-14' src='./logo.png' alt='logo' />
            <h1 className='mt-4 text-gray-600 md:text-lg'>Welcome</h1>

            <h2 className='mt-4 text-2xl font-medium text-gray-800 lg:text-3xl'>
              Login To Your Account
            </h2>
          </div>

          <div className='mt-8 lg:w-1/2 lg:mt-0'>
            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
};

LoginSection.displayName = 'LoginSection';
export default LoginSection;
