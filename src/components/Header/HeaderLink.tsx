import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Ref = HTMLAnchorElement;

interface HeaderLinkOptions {
  active?: boolean;
}

export type HeaderLinkProps = React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> &
  HeaderLinkOptions;

const HeaderLink = forwardRef<Ref, HeaderLinkProps>((props, ref) => {
  const { className, active, children, ...rest } = props;

  const merged = clsx(
    active
      ? 'text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6'
      : 'border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6',

    className,
  );

  return (
    <a ref={ref} className={merged} {...rest}>
      {children}
    </a>
  );
});

HeaderLink.displayName = 'HeaderLink';
export default HeaderLink;
