"use client";

import "./globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";
import Head from "./_components/head";

import XThemeProvider from "@/components/theme_provider";
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head />
      <body>
        <XThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </div>
          <Toaster />
        </XThemeProvider>
      </body>
    </html>
  );
}
