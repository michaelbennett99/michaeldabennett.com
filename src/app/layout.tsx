"use client";

import localFont from "next/font/local";
import "./globals.css";

import Header from "./_components/header";
import Footer from "./_components/footer";
import Head from "./_components/head";
import XThemeProvider from "./_components/theme_provider";

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
          <Header />
          {children}
          <Footer />
        </XThemeProvider>
      </body>
    </html>
  );
}
