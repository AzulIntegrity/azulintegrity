import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { generateMetadata } from "@/components";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetadata({
  title: "Azul Integrity - SEO Optimized Next.js App",
  description: "A modern React application built with Next.js, TypeScript, and SEO best practices for optimal search engine performance.",
  keywords: ["nextjs", "react", "seo", "typescript", "web development", "azul integrity"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.ico/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="AZUL INTEGRITY ACCOUNTING SERVICES" />
        <link rel="manifest" href="/favicon.ico/site.webmanifest" />
        <meta name="theme-color" content="#005B99" />
   
    <meta name="theme-color" content="#005B99" media="(prefers-color-scheme: light)" />
    <meta name="theme-color" content="#003B66" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#005B99" />
      
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
