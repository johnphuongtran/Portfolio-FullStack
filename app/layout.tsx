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
    default: "John Tran — HRIS & integrations",
    template: "%s — John Tran",
  },
  description:
    "HRIS Technical Solutions Analyst and integrations developer: Boomi, UKG Pro WFM & Payroll, APIs, Python & Groovy. Based in Houston, TX.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "John Tran",
    title: "John Tran — HRIS & integrations",
    description:
      "HRIS Technical Solutions Analyst and integrations developer: Boomi, UKG Pro WFM & Payroll, APIs, Python & Groovy.",
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
