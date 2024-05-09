import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLInputElement;

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const merged = clsx(
    'block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40',
    className,
  );

  return <input ref={ref} className={merged} {...rest} />;
});

Input.displayName = 'Input';
export default Input;
