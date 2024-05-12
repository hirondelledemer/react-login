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

const classes = {
  main: 'px-6 py-2 rounded-lg',
  primary: 'font-medium tracking-wide text-white bg-blue-600 hover:bg-blue-500',
  secondary: 'text-gray-500 hover:bg-gray-100',
  secondaryActive: 'text-blue-500 bg-blue-100/60',
};

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { className, children, variant = 'primary', ...rest } = props;

  const merged = clsx(
    {
      [classes.main]: true,
      [classes.primary]: variant === Variant.primary,
      [classes.secondary]: variant === Variant.secondary,
      [classes.secondaryActive]: variant === Variant.secondaryActive,
    },
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
