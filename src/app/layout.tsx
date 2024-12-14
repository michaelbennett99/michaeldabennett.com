"use client";

import "./globals.css";

import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import Head from "./_components/layout/head";
import XThemeProvider from "../components/theme_provider";

import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
