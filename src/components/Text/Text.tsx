import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLParagraphElement;

export enum Variant {
  default = 'default',
  error = 'error',
}

export enum Size {
  default = 'default',
  small = 'small',
}

interface TextOptions {
  variant?: Variant;
  size?: Size;
}

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLParagraphElement
> &
  TextOptions;

const Text = forwardRef<Ref, TextProps>((props, ref) => {
  const { className, children, variant, size, ...rest } = props;

  const merged = clsx(
    variant === Variant.error && 'text-red-400',
    size === Size.small && 'text-xs',
    className,
  );

  return (
    <p ref={ref} className={merged} {...rest}>
      {children}
    </p>
  );
});

Text.displayName = 'Text';
export default Text;
