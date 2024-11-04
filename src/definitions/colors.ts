export const DEFAULT_COLOR = Symbol('default-color');

/**
 * List of available application colors.
 */
export const COLORS = [
  // Brand colors
  'primary',
  'secondary',
  'tertiary',

  // Contextual colors
  'success',
  'info',
  'warning',
  'danger',

  // Tonal colors
  'light',
  'dark',
] as const;

export type ColorName = (typeof COLORS)[number];

export interface IColorMap<TValue = unknown> extends Partial<Record<ColorName, TValue>> {
  [DEFAULT_COLOR]: TValue;
}
