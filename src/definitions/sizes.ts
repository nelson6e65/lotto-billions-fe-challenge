export const DEFAULT_SIZE = Symbol('default-size');

/**
 * List of available application sizes.
 */
export const SIZES = [
  'zero',
  'xs',
  'sm',
  'normal',
  'md',
  'lg',
  'xl',
  '2xl',
  '3xl',
  'full',
] as const;

export type SizeName = (typeof SIZES)[number];

export interface ISizeMap<TValue = unknown> extends Partial<Record<SizeName, TValue>> {
  [DEFAULT_SIZE]: TValue;
}
