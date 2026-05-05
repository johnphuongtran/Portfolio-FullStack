import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: getSiteUrl(),
  title: {
    default: "Portfolio — Your Name",
    template: "%s — Your Name",
  },
  description:
    "Résumé and project showcase. Replace this description in app/layout.tsx for search and link previews.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Portfolio",
    title: "Portfolio — Your Name",
    description:
      "Résumé and project showcase. Replace this description in app/layout.tsx for search and link previews.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
