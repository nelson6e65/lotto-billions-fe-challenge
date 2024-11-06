'use client';

import clsx, { ClassValue } from 'clsx';
import { useEffect, useMemo, useState } from 'react';

export interface IKeyValue {
  key: string;

  value: number | string;
}

export namespace IKeyValue {
  export const normalize = (value: IKeyValue | string | number) => {
    if (typeof value === 'number' || typeof value === 'string') {
      return { key: `${value}`, value: value };
    }

    return value;
  };
}

export interface ILotteryNumbersPickerProps {
  availableValues: (number | string | IKeyValue)[];
  disabledValues?: (number | string | IKeyValue)[];
  selectedValues?: (number | string | IKeyValue)[];
  maxSelections?: number;
  editable?: boolean;
  displayText?: 'key' | 'value';

  onChange?: (selectedKeys: string[]) => void;
  className?: ClassValue;

  children?: never;
}

export default function LotteryNumbersPicker({
  editable,
  availableValues = [],
  // selectedValues = [],
  maxSelections = 1,
  displayText = 'value',
  className,
  onChange,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ...props
}: ILotteryNumbersPickerProps) {
  // const initialSelectedMap: Record<string, boolean | undefined> = {};
  //
  // selectedValues.map(IKeyValue.normalize).forEach((value) => {
  //   initialSelectedMap[value.key] = true;
  // });

  // TODO: Make compatible with edition and disabled elements

  const [
    selectedItemsMap,
    setSelectedItemsMap,
  ] = useState<Record<string, boolean | undefined>>({});

  const [
    selectedItemsCount,
    setSelectedItemsCount,
  ] = useState<number>(0);

  // useEffect(() => {
  //   const selectedKeys = Object.keys(selectedItemsMap).filter((key) => selectedItemsMap[key] === true);
  //
  //   setSelectedItemsCount(selectedKeys.length);
  //
  //   if (onChange) {
  //     onChange(selectedKeys);
  //   }
  // }, [
  //   selectedItemsMap,
  //   onChange,
  // ]);

  const availableItems: IKeyValue[] = availableValues.map(IKeyValue.normalize);

  const toggleElement = (key: string) => {
    const selected: Record<string, boolean | undefined> = { ...selectedItemsMap, [key]: !selectedItemsMap[key] };

    const selectedKeys = Object.keys(selected).filter((key) => selected[key] === true);

    setSelectedItemsCount(selectedKeys.length);

    if (onChange) {
      onChange(selectedKeys);
    }
    // console.log('toggleElement', key);

    setSelectedItemsMap(selected);
  };

  // TODO: Move calculations to a helper or CSS module
  // FIXME: Make this calculation based on displayName length or the largest element (do not assume values are always number)
  const maxDigits = availableItems.length.toString().length;

  // console.log(sizeClass);

  const availableElements = availableItems.map((elem) => {
    return (
      // FIXME: Implement using checkboxes instead
      <kbd
        key={elem.key}
        tabIndex={0}
        onClick={() => {
          // Disable unselected elements if maxSelections is reached
          if (!editable || (selectedItemsCount >= maxSelections && !selectedItemsMap[elem.key])) {
            return;
          }

          toggleElement(elem.key);
        }}
        className={clsx('!text-normal flex aspect-square cursor-pointer items-center justify-center p-0', {
          'hover:border-tangaroa-600 hover:shadow': editable,
          'bg-tangaroa-600 font-semibold text-white dark:bg-tangaroa-600': selectedItemsMap[elem.key],
          '!cursor-not-allowed opacity-70': selectedItemsCount >= maxSelections && !selectedItemsMap[elem.key],
        })}
      >
        {elem[displayText]}
      </kbd>
    );
  });

  // console.log({ maxDigits });

  return (
    // TODO: Add a search / pagination when there are > 1000 items
    <div
      className={clsx('grid auto-rows-fr gap-2 p-2', className, `[max_digits_${maxDigits}]`, {
        // Max width is capped to md
        // To keep proportional each tile...
        'grid-cols-8 sm:grid-cols-10 md:grid-cols-12': maxDigits <= 2,
        'grid-cols-7 sm:grid-cols-10 md:grid-cols-12': maxDigits == 3,
        'grid-cols-5 sm:grid-cols-8 md:grid-cols-8': maxDigits == 4,
        'grid-cols-4 sm:grid-cols-6 md:grid-cols-7': maxDigits > 4,
      })}
    >
      {availableElements}
    </div>
  );
}
