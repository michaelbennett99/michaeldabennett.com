import { useTheme } from "next-themes";
import Image from "next/image";
export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="text-muted-foreground bg-muted border-t text-sm py-4">
      <div className="flex flex-row justify-around items-center">
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
              className="text-primary hover:text-muted-foreground"
            >
              Next.js
            </a> and <a
              href="https://tailwindcss.com"
              target="_blank"
              className="text-primary hover:text-muted-foreground"
            >
              Tailwind CSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
