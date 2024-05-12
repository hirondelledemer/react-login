import React, { forwardRef, ReactNode } from 'react';
import clsx from 'clsx';
import Text, { Variant, Size } from '../Text';

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
    'block w-full py-3 text-gray-700 bg-white border rounded-lg px-11',
    errorMessage && 'border-red-400',
  );
  const containerMerged = clsx('relative flex items-center', className);

  return (
    <div className={containerMerged}>
      <div>
        <span className='absolute mt-3'>{icon}</span>
        <input ref={ref} className={merged} {...rest} />
        {errorMessage && (
          <Text variant={Variant.error} size={Size.small} className='mt-3'>
            {errorMessage}
          </Text>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
