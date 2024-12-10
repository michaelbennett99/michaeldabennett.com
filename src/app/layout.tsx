"use client";

// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { useDarkMode } from "usehooks-ts";
import { LuMoon, LuSun } from "react-icons/lu";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
  const { isDarkMode, toggle, enable, disable } = useDarkMode({
    defaultValue: false,
    initializeWithValue: false
  });
  const pathname = usePathname();

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    if (darkModeMediaQuery.matches) {
      enable();
    } else {
      disable();
    }
  }, []);

  return (
    <html lang="en" className={isDarkMode ? "dark" : ""}>
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
        <header
          className={twJoin(
            "text-lg text-bold sticky top-0 border-b",
            "bg-background text-foreground border-border",
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
            <NavLink href="/about" pathname={pathname}>About</NavLink>
            <NavLink href="/cv" pathname={pathname}>CV</NavLink>
            <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
            <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
            <DarkModeToggle
              isDarkMode={isDarkMode}
              toggle={toggle}
              className={twJoin(
                "px-6 text-foreground bg-background",
                "hover:text-muted-foreground hover:bg-muted",
                "transition-colors duration-300"
              )}
            />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
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
        isActive ? "!text-gray-800 !bg-gray-200" : "",
        "hover:text-gray-800 hover:bg-gray-200",
        "transition-colors duration-300 flex-grow text-center",
      )}
    >
      {children}
    </Link>
  );
}

function DarkModeToggle(
  {
    isDarkMode,
    toggle,
    className
  }: {
    isDarkMode: boolean,
    toggle: () => void,
    className?: string
  }
) {
  return (
    <button onClick={toggle} className={className}>
      {
        isDarkMode
        ? <LuMoon className="text-gray-800 bg-gray-200" />
        : <LuSun className="text-gray-800 bg-gray-200" />}
    </button>
  );
}
