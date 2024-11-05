import { ReactNode } from 'react';

export default function LotteriesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <main className="h-full overflow-auto">
      {/*  */}
      {children}
    </main>
  );
}
