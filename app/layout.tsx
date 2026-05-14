import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Orbitron, Inter } from 'next/font/google';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Au Yi Xian — Senior Penetration Tester',
  description:
    'Offensive security specialist with expertise in web, mobile, cloud, source code review, reverse engineering, thick client testing, WiFi testing, and AI/ML security.',
  keywords: [
    'penetration tester',
    'cybersecurity',
    'OSCP',
    'OSWE',
    'CREST',
    'web application security',
    'security engineer',
    'offensive security',
  ],
  authors: [{ name: 'Au Yi Xian' }],
  creator: 'Au Yi Xian',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Au Yi Xian — Senior Penetration Tester',
    description: 'Elite offensive security consultant and senior penetration tester.',
    siteName: 'Au Yi Xian Portfolio',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080c08',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${orbitron.variable} ${inter.variable}`}>
      <body className="bg-terminal-bg text-gray-200 font-mono antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
