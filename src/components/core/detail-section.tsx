import clsx, { ClassValue } from 'clsx';
import { ReactNode } from 'react';

export interface IDetailSectionProps {
  title?: string;
  description?: string;

  wrap?: boolean;
  className?: ClassValue;
  children?: ReactNode;
}

export default async function DetailSection({ title, description, wrap, className, children }: IDetailSectionProps) {
  return (
    <section
      className={clsx(
        className,
        'flex flex-row flex-wrap items-center gap-4 rounded p-2 transition-colors hover:bg-zinc-50/50 hover:shadow',
      )}
    >
      <header>
        <h2 className="text-lg font-bold">{title}</h2>
      </header>

      <div className={clsx('grow text-right', { 'w-full': wrap })}>
        {description && description}

        {children}
      </div>
    </section>
  );
}
