// @ts-nocheck
import type { Metadata } from 'next';
import { Cinzel, Lato } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-heading' });
const lato   = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Blade Academy — Fencing & Weapons Arts | Seattle, WA',
  description: 'Seattle\'s premier fencing and weapons arts school. Foil, Sabre, Épée, Kendo, and Iaido. Certified masters, all skill levels welcome.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
