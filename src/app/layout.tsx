"use client";

import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { twJoin } from "tailwind-merge";
import { LuMoon, LuSun } from "react-icons/lu";
import { ThemeProvider, useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

function Header() {
  const pathname = usePathname();

  return (
    <header
      className={twJoin(
      "text-lg text-bold sticky top-0 border-b",
      "flex flex-row justify-between items-center",
      "text-foreground bg-background"
    )}
    >
      <Link href="/" className="px-8 lg:px-16">
        <span className="text-4xl font-bold">
          Michael Bennett
        </span>
      </Link>
      <nav
        className={cn(
          "flex flex-row justify-around items-stretch",
        )}
      >
        <NavLink href="/about" pathname={pathname}>About</NavLink>
        <NavLink href="/cv" pathname={pathname}>CV</NavLink>
        <NavLink href="/blog" pathname={pathname}>Blog</NavLink>
        <NavLink href="/contact" pathname={pathname}>Contact</NavLink>
        <DarkModeToggle
          className={twJoin(
            "px-6",
            "transition-colors duration-300",
            "hover:bg-accent hover:text-accent-foreground"
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
  const isActive = pathname.endsWith(href) || pathname.includes(href + "/");

  return (
    <Link
      href={href}
      className={cn(
        "text-lg font-bold flex-grow text-center relative",
        "py-4 px-1 md:px-2 lg:px-4 2xl:px-8",
        "hover:bg-accent hover:text-accent-foreground",
        "transition-colors duration-300",
        "after:absolute after:bottom-0 after:left-1/2 after:h-[2px]",
        "after:bg-current after:transition-all after:duration-300",
        isActive ? "after:w-full" : "after:w-0",
        "after:-translate-x-1/2",
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

function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="text-muted-foreground bg-muted border-t text-sm py-4">
      <div
        className="flex flex-row justify-around items-center"
      >
        <div>
          {
            theme === "dark"
            ? <Image
              src="/images/logo.white.png"
              alt="Michael Bennett"
              width={100}
              height={100}
              className="rounded-full"
            />
            : <Image
              src="/images/logo.black.png"
              alt="Michael Bennett"
              width={100}
              height={100}
              className="rounded-full"
            />
          }
        </div>
        <div>
          <div className="text-center">
            <span className="font-bold">Michael Bennett </span>
            <span className="text-muted-foreground">
              &copy; 2024
            </span>
          </div>
          <div>
            Built with <a
              href="https://nextjs.org"
              target="_blank"
              className="text-primary hover:text-primary-foreground"
            >
              Next.js
            </a> and <a
              href="https://tailwindcss.com"
              target="_blank"
              className="text-primary hover:text-primary-foreground"
            >
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
