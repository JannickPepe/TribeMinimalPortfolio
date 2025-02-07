import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  display: "swap",
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-archivo",
})

export const metadata: Metadata = {
  title: 'Minimal Single Page Portfolio',
  description: 'Crafting Digital Experiences Through Code & Create Designs',
  keywords: ['portfolio', 'web development', 'design', 'coding', 'minimal UI', 'NighteCoding'],
  openGraph: {
    title: 'Minimal Single Page Portfolio',
    description: 'Crafting Digital Experiences Through Code & Create Designs',
    url: 'https://nighte-minimal-portfolio.vercel.app',
    siteName: 'Minimal Portfolio',
    images: [
      {
        url: '/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minimal Portfolio OG Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-stone-200 text-stone-900 ${archivo.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
