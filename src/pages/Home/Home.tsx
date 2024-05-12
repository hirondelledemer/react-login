import Header from '@src/components/Header/Header';
import React from 'react';
import { todos } from './Home.data';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className='container flex flex-col px-6 py-10 mx-auto'>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl'>
              TODOs:
            </h1>
            <ul className='list-disc'>
              {todos.map((todo, index) => (
                <li key={index} className='mt-4'>
                  {todo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
