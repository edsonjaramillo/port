import { type Metadata, type Viewport } from 'next';
import { Inter as NextFont } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import SkipToMainContent from 'ui/src/SkipToMainContent';
import { cn } from 'ui/src/lib/tw';
import { ENV } from 'utils/src/env';
import { websiteJSONLD, JSONLD } from 'utils/src/metadata/JSONLD';
import { SEO } from 'utils/src/metadata/SEO';

import './globals.css';

const font = NextFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

const url = ENV.URL;

export const metadata: Metadata = {
  title: "Edson Jaramillo's Portfolio",
  applicationName: "Edson Jaramillo's Portfolio",
  icons: SEO.icons(url),
  metadataBase: new URL(url),
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#123b2d',
  initialScale: 1,
  width: 'device-width',
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const htmlClasses = cn(
    font.variable,
    'scrollbar-track-background-900 scroll-smooth scrollbar-thin scrollbar-thumb-primary',
  );

  return (
    <html className={htmlClasses} lang="en">
      <JSONLD markup={websiteJSONLD} />
      <body className="relative overflow-x-hidden bg-grayscale-50 selection:bg-primary-200">
        <SkipToMainContent />
        <main id="main-content">{children}</main>
        <Toaster toastOptions={{ duration: 3000 }} position="top-right" />
      </body>
    </html>
  );
}
