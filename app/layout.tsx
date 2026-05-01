// @ts-nocheck
import type { Metadata } from 'next';
import { Cinzel, Lato } from 'next/font/google';
import './globals.css';
import { getKorivaConfig, buildCssVars } from '@/lib/koriva-config';

import { KorivaLivePreview } from '@/components/KorivaLivePreview';
const cinzel = Cinzel({ subsets: ['latin'], weight: ['400', '700', '900'], variable: '--font-heading' });
const lato   = Lato({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Blade Academy — Fencing & Weapons Arts | Seattle, WA',
  description: 'Seattle\'s premier fencing and weapons arts school. Foil, Sabre, Épée, Kendo, and Iaido. Certified masters, all skill levels welcome.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cfg = await getKorivaConfig();
  const vars = buildCssVars(cfg?.brand);
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`} style={vars as React.CSSProperties}>
      <body className="antialiased">{children}<KorivaLivePreview /></body>
    </html>
  );
}
