"use client";

import localFont from "next/font/local";
import "./globals.css";
import { twJoin } from "tailwind-merge";
import { ThemeProvider } from "next-themes";

import Header from "./_components/header";
import Footer from "./_components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Michael Bennett</title>
        <meta name="description" content="Michael Bennett's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={twJoin(
          `${geistSans.variable} ${geistMono.variable} antialiased`,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
