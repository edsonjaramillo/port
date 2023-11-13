import { type Metadata, type Viewport } from 'next';
import { Inter as NextFont } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import SkipToMainContent from 'ui/src/SkipToMainContent';
import { cn } from 'ui/src/lib/tw';
import { ENV } from 'utils/src/env';
import { websiteJSONLD, JSONLD } from 'utils/src/metadata/JSONLD';
import { SEO } from 'utils/src/metadata/SEO';

import DesktopNavigation from '../components/shared/DesktopNavigation';
import Footer from '../components/shared/Footer';
import MobileNavigation from '../components/shared/MobileNavigation';
import UniqueVisitor from '../components/shared/UniqueVisitor';
import './globals.css';

const font = NextFont({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-next',
});

const url = ENV.URL;

export const metadata: Metadata = {
  applicationName: "Edson Jaramillo's Portfolio",
  icons: SEO.icons(url),
  metadataBase: new URL(url),
};

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0814',
  initialScale: 1,
  width: 'device-width',
};

type RootLayoutProps = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutProps) {
  const htmlClasses = cn(
    font.variable,
    'scroll-smooth scrollbar-thin scrollbar-track-background-900 scrollbar-thumb-primary',
  );

  return (
    <html className={htmlClasses} lang="en">
      <body className="relative overflow-x-hidden bg-background selection:bg-primary-200">
        <JSONLD markup={websiteJSONLD} />
        <SkipToMainContent />
        <DesktopNavigation />
        <MobileNavigation />
        <main id="main-content">{children}</main>
        <Footer />
        <Toaster toastOptions={{ duration: 3000 }} position="top-right" />
        <UniqueVisitor />
      </body>
    </html>
  );
}
