import clsx, { ClassValue } from 'clsx';

export interface IPlaceholderImageSkeletonProps {
  className?: ClassValue;
}

export default function ImageSkeleton({ className }: IPlaceholderImageSkeletonProps) {
  // TODO: Add props for aspect ratio

  return (
    <div
      role="status"
      className={clsx(
        'aspect-square h-auto w-full animate-pulse space-y-8 overflow-hidden md:flex md:items-center md:space-x-8 md:space-y-0 rtl:space-x-reverse',
        className,
      )}
    >
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded bg-gray-300 dark:bg-gray-700">
        <svg
          className="h-6 w-6 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}
