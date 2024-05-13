import Header from '@src/components/Header/Header';
import React from 'react';
import { todos } from './Home.data';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <section
        className='container flex flex-col px-6 py-10 mx-auto'
        role='main'
      >
        <div className='w-full'>
          <h1 className='mt-4 text-2xl font-medium text-gray-800 lg:text-3xl'>
            TODOs:
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mx-auto'>
            {todos.map((todo) => (
              <div key={todo.sectionId}>
                <h2 className='mt-12 mb-2 text-lg font-semibold'>
                  {todo.sectionName}
                </h2>
                <ul className='list-disc'>
                  {todo.items.map((todo, index) => (
                    <li key={index} className='mt-4'>
                      {todo}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

Home.displayName = 'Home';
export default Home;
