export default function LotteriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container mx-auto min-h-screen">
      {/*  */}

      {children}
    </main>
  );
}
