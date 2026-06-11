import type { Metadata } from 'next';
import { Space_Grotesk, Outfit } from 'next/font/google';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Fizyan — AI/ML & IoT Developer',
  description:
    'Mohammad Fiziyan Dhada — AI/ML & IoT developer, builder, and entrepreneur based in Bengaluru. Building intelligent systems that bridge hardware and AI.',
  keywords: ['AI', 'ML', 'IoT', 'Full-Stack', 'Bengaluru', 'Fizyan'],
  authors: [{ name: 'Mohammad Fiziyan Dhada' }],
  openGraph: {
    title: 'Fizyan — AI/ML & IoT Developer',
    description: 'Building intelligent systems that bridge hardware & AI.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-pitch antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
