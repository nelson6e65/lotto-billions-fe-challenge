import { ReactNode } from 'react';

export default function LotteriesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-full flex-col">
      {/*nav*/}
      <main className="flex-grow border">
        {/*  */}
        {children}
      </main>

      {/*  Footer */}
    </div>
  );
}
