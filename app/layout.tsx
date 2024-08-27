import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--fontSans',
});

export const metadata: Metadata = {
  title: 'MediPlus',
  description: 'A simple healthcare platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-dark-300 anitaliased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
