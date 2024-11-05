import { ColorName } from '@/definitions/colors';
import { SizeName } from '@/definitions/sizes';
import clsx, { ClassValue } from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import style from './app-button.module.css';

export interface IAppButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  /**
   * Color variant of the button.
   */

  color?: ColorName;

  /**
   * Size of the button.
   */
  size?: SizeName;

  /**
   * Whether the button is rounded or not or the round size.
   */
  rounded?: boolean | SizeName;

  className?: ClassValue | undefined;
}

export default function AppButton({ color, children, rounded, className = '', ...props }: Readonly<IAppButtonProps>) {
  if (typeof rounded === 'boolean') {
    rounded = rounded ? 'normal' : 'zero';
  }

  return (
    <button
      {...props}
      className={clsx(
        style.defaults,
        className,

        //
        style[`color-variant-${color}`],
        style[`rounded-size-${rounded}`],
      )}
    >
      {children}
    </button>
  );
}
