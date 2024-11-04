import { ColorName, DEFAULT_COLOR, IColorMap } from '@/definitions/colors';
import { DEFAULT_SIZE, ISizeMap, SizeName } from '@/definitions/sizes';
import clsx, { ClassValue } from 'clsx';
import style from './app-button.module.css';

const roundedSizeCssClassMap: ISizeMap<string | string[]> = {
  zero: 'rounded-none',
  sm: 'rounded-sm',
  normal: 'rounded',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  '2xl': 'rounded-2xl',
  '3xl': 'rounded-3xl',
  full: 'rounded-full',

  [DEFAULT_SIZE]: '',
};

export interface IAppButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
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
