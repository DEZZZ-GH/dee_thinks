import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CTRL ALT GROW – Self-Mastery by Dee Thinks",
  description: "Clarity, control, and identity shifts for people tired of fake self-help. Articles, ebook, and tools for self-mastery.",
  keywords: ["self mastery", "ego", "subconscious mind", "emotions", "personal growth", "self-help clarity"],
  authors: [{ name: "Dee Thinks" }],
  openGraph: {
    title: "CTRL ALT GROW – Self-Mastery by Dee Thinks",
    description: "Break free from mental loops and modern traps. Articles, ebook, and guides on mastering your mind.",
    url: "https://dee-thinks.vercel.app/",
    siteName: "CTRL ALT GROW",
    images: [
      {
        url: "https://dee-thinks.vercel.app/cover.png",
        width: 1200,
        height: 630,
        alt: "CTRL ALT GROW by Dee Thinks",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "Twitter, dee thinks",
    site: "@CtrlAltGrow_now",
    title: "CTRL ALT GROW – Self-Mastery by Dee Thinks",
    description: "Clarity, control, and growth for people stuck in the spiral.",
    images: ["https://dee-thinks.vercel.app/cover.png"],
  },
  alternates: {
  canonical: "https://dee-thinks.vercel.app",
},
};


import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Script from "next/script";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="book-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "CTRL ALT GROW",
              "author": {
                "@type": "Person",
                "name": "Dee Thinks"
              },
              "description":
                "Self-help failed you. This is clarity for when you’re stuck in the spiral. Covers mind, subconscious, emotions, time, and modern traps.",
              "publisher": {
                "@type": "Organization",
                "name": "Dee Thinks"
              },
              "offers": {
                "@type": "Offer",
                "url": "https://deethinks.gumroad.com/l/CtrlAltGrow", // replace with final sales page (Gumroad, etc.)
                "price": "7.00",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              }
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}



