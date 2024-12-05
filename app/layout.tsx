import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vivekchaturvedi.dev'),
  title: {
    default: 'Vivek chaturvedi | Full Stack Developer',
    template: '%s | Vivek chaturvedi',
  },
  description: 'Experienced Full Stack Developer specializing in modern web technologies',
  keywords: ['Full Stack Developer', 'Web Development', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Vivek chaturvedi' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vivekchaturvedi.dev',
    title: 'Vivek chaturvedi | Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in modern web technologies',
    siteName: 'Vivek chaturvedi Portfolio',
    images: [
      {
        url: 'https://vivekchaturvedi.dev/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Vivek chaturvedi Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek chaturvedi | Full Stack Developer',
    description: 'Experienced Full Stack Developer specializing in modern web technologies',
    creator: '@vivekchaturvedi',
    images: ['https://vivekchaturvedi.dev/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}