import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

export default function NavButton({ children, className, ...props }: Props) {
  return (
    <button
      className={cn(
        "px-4 py-4 h-full hover:bg-accent hover:text-accent-foreground",
        "transition-colors duration-300",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
