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
    'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80',
    className,
  );

  return <input ref={ref} className={merged} {...rest} />;
});

Input.displayName = 'Input';
export default Input;
