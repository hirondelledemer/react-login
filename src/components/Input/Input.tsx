import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';

type Ref = HTMLInputElement;

interface InputOptions {
  errorMessage?: string;
  icon?: ReactNode;
}
export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  InputOptions;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { className, children, errorMessage, icon, ...rest } = props;

  const merged = clsx(
    'block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40',
    errorMessage && 'dark:border-red-400',
  );
  const containerMerged = clsx('relative flex items-center', className);

  return (
    <div className={containerMerged}>
      <div>
        <span className='absolute mt-3'>{icon}</span>
        <input ref={ref} className={merged} {...rest} />
        {errorMessage && (
          <p className='mt-3 text-xs text-red-400'>{errorMessage}</p>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
