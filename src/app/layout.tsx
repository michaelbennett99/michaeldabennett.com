"use client";

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { useDarkMode } from "usehooks-ts";
import { LuMoon, LuSun } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "next-themes";

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

// export const metadata: Metadata = {
//   title: "Michael Bennett",
//   description: "Michael Bennett's personal website",
//   icons: {
//     icon: "/favicon.ico",
//     apple: "/favicon.ico",
//   }
// };

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
        <link rel="icon" href="/favicon.ico" />
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
        </ThemeProvider>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header
      className={twJoin(
      "text-lg text-bold sticky top-0 border-b",
      "flex flex-row justify-between items-center"
    )}
    >
      <Link href="/" className="px-8 lg:px-16">
        <span className="text-4xl font-bold">
          Michael Bennett
        </span>
      </Link>
      <nav
        className="flex flex-row justify-around items-stretch"
      >
        <NavLink href="/about" pathname={""}>About</NavLink>
        <NavLink href="/cv" pathname={""}>CV</NavLink>
        <NavLink href="/blog" pathname={""}>Blog</NavLink>
        <NavLink href="/contact" pathname={""}>Contact</NavLink>
        <DarkModeToggle
          className={twJoin(
            "px-6",
            "transition-colors duration-300"
          )}
        />
      </nav>
    </header>
  )
}

function NavLink({
  children,
  href,
  pathname
}: {
  children: React.ReactNode;
  href: string;
  pathname: string;
}) {
  const isActive = pathname.endsWith(href);

  return (
    <Link
      href={href}
      className={twJoin(
        "text-lg font-bold py-4 px-1 md:px-2 lg:px-4 2xl:px-8",
        "transition-colors duration-300 flex-grow text-center",
      )}
    >
      {children}
    </Link>
  );
}

function DarkModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";
  const toggle = () => {
    setTheme(isDarkMode ? "light" : "dark");
  }

  return (
    <button onClick={toggle} className={className}>
      {
        isDarkMode
        ? <LuMoon />
        : <LuSun />
      }
    </button>
  );
}
