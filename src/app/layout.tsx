import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import './globals.css';

const geistSans = localFont({
  src: '../assets/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  // weight: '300 400 700', // light, normal, bold
});
const geistMono = localFont({
  src: '../assets/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  // weight: '300 400 700', // light, normal, bold
});

export const metadata: Metadata = {
  title: 'LottoBillions',
  description: 'LottoBillions challenge',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-default bg-default h-full overflow-hidden font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
