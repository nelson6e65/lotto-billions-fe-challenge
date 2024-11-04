import { ColorName } from '@/definitions/colors';
import clsx, { ClassValue } from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';
import style from './app-link.module.css';

interface IAppLinkProps extends LinkProps {
  color?: ColorName;
  disabled?: boolean;

  className?: ClassValue;
  children: ReactNode;
}

export default function AppLink({
  color = 'primary',
  disabled,
  className = '',
  children,
  ...props
}: Readonly<IAppLinkProps>) {
  // TODO: Implement functional `disabled` state
  return (
    <Link
      {...props}
      className={clsx(
        '[ app-link ]',
        //
        style.defaults,
        style[`color-variant-${color}`],
        className ?? '',
      )}
      aria-disabled={disabled ? 'true' : undefined}
    >
      {children}
    </Link>
  );
}
