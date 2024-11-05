import ImageSkeleton from '@/components/core/image-skeleton';
import TextSkeleton from '@/components/core/text-skeleton';
import clsx, { ClassValue } from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

export interface IAppCardProps {
  href?: string | undefined;
  imageUrl?: string;
  imageAlt?: string;
  title?: string;
  subtitle?: string;

  children?: ReactNode;
  className?: ClassValue;
  /**
   * Only loads an loading skeleton.
   */
  skeleton?: boolean;
}

const DynamicRoot = ({
  href,
  children,
  className,
}: {
  href?: string | undefined;
  className?: string;
  children: ReactNode;
}) => {
  if (href) {
    return (
      <Link href={href} className={clsx(className, 'block')}>
        {children}
      </Link>
    );
  }

  return <div className={className}>{children}</div>;
};

export default function AppCard({
  href,
  children,
  title,
  subtitle,
  imageUrl,
  imageAlt = 'image',
  skeleton,
  className,
}: IAppCardProps) {
  if (skeleton) {
    imageUrl = '-';
    title = '';
    subtitle = '';
    imageAlt = 'Loading...';
  }

  return (
    <DynamicRoot
      href={href}
      className={clsx(
        '[ app-card ]',
        className,
        'flex flex-col items-center gap-2 overflow-hidden rounded-lg border border-sunshade-200/30 bg-sunshade-100/30 shadow backdrop-blur-sm backdrop-filter hover:bg-sunshade-200/30 md:flex-row dark:border-gray-700 dark:bg-gray-800/30 dark:hover:bg-gray-700/30',
        { grayscale: skeleton },
      )}
    >
      {imageUrl && (
        <div className="flex aspect-square h-60 w-full min-w-12 max-w-md items-center justify-center overflow-hidden p-2 md:h-full md:w-56">
          {skeleton ? (
            <ImageSkeleton className="!size-28 rounded-full md:!size-16" />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              className="h-full w-auto object-contain drop-shadow md:h-auto md:w-full"
              src={imageUrl}
              alt={imageAlt}
            />
          )}
        </div>
      )}

      <div className="flex flex-col justify-between overflow-hidden p-2 leading-normal text-black dark:text-sunshade-50">
        {skeleton && <TextSkeleton />}
        {title && <h5 className="text-2xl font-bold tracking-tight">{title}</h5>}

        {subtitle && <p className="mt-2 flex-grow overflow-auto font-normal">{subtitle}</p>}

        {children && <div className="mt-2 flex-grow overflow-auto font-normal">{children}</div>}
      </div>
    </DynamicRoot>
  );
}
