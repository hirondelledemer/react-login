import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLButtonElement;

export enum Variant {
  primary = 'primary',
  secondary = 'secondary',
  secondaryActive = 'secondary-active',
}

interface ButtonOptions {
  variant?: Variant;
}
export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { className, children, variant = 'primary', ...rest } = props;

  const merged = clsx(
    variant === Variant.primary &&
      'px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80',
    variant === Variant.secondary &&
      'px-6 py-2 text-sm text-gray-500 rounded-md dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100',
    variant === Variant.secondaryActive &&
      'px-6 py-2 text-sm text-blue-500 rounded-md dark:bg-gray-800 bg-blue-100/60',
    className,
  );

  return (
    <button ref={ref} className={merged} {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
