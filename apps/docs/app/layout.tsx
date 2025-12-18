import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'base-vaul',
    template: '%s · base-vaul',
  },
  description: 'A minimal drawer component for modern React applications.',

  applicationName: 'base-vaul',

  metadataBase: new URL('https://base-vaul.dev'),

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    url: 'https://base-vaul.dev',
    title: 'base-vaul',
    description: 'A minimal drawer component for modern React applications.',
    siteName: 'base-vaul',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'base-vaul',
    description: 'A minimal drawer component for modern React applications.',
    creator: '@YOUR_HANDLE',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
