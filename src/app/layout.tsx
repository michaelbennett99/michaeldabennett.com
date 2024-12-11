"use client";

import "./globals.css";

import Header from "./_components/layout/header";
import Footer from "./_components/layout/footer";
import Head from "./_components/layout/head";
import XThemeProvider from "../components/theme_provider";

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
