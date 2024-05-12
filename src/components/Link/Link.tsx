import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLAnchorElement;

export type LinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLElement>,
  HTMLAnchorElement
>;

const Link = forwardRef<Ref, LinkProps>((props, ref) => {
  const { className, children, ...rest } = props;

  const merged = clsx(
    'inline-block mt-4 text-center text-blue-500 md:mt-0 mx-6 hover:underline',
    className,
  );

  return (
    <a ref={ref} className={merged} {...rest}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';
export default Link;
