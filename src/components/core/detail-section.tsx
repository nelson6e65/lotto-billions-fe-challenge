import { ReactNode } from 'react';

export interface IDetailSectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default async function DetailSection({ title, description, children }: IDetailSectionProps) {
  return (
    <section className="flex flex-row flex-wrap items-center rounded p-2 transition-colors hover:bg-zinc-50/50 hover:shadow">
      <header>
        <h2 className="text-lg font-bold">{title}</h2>
      </header>

      <div className="grow text-right">
        {description && description}

        {children}
      </div>
    </section>
  );
}
