// app/layout.tsx
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Annika Trading – Construction Supply in Valenzuela',
  description:
    'Annika Trading is your trusted construction supply store in Valenzuela, Philippines. Cement, steel, pipes, hardware and more. Call 0909 993 1787.',
  keywords:
    'construction supply Valenzuela, building materials Philippines, cement steel pipes hardware',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
