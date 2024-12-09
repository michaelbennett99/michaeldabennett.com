import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
  title: "Michael Bennett",
  description: "Michael Bennett's personal website",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  }
};

function NavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="text-lg font-bold py-4 hover:text-gray-800 hover:bg-gray-200 transition-colors duration-300 flex-grow text-center border-inherit px-2 md:px-4 lg:px-8 2xl:px-16"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:bg-gray-900 dark:text-gray-500 dark:border-gray-800`}
      >
        <header
          className="text-lg text-bold sticky top-0 border-b border-inherit flex flex-row justify-between items-center px-8 lg:px-16 bg-white"
        >
          <Link href="/">
            <span className="text-4xl font-bold">
              Michael Bennett
            </span>
          </Link>
          <nav className="flex flex-row justify-around items-center">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/cv">CV</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
