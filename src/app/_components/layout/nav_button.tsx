import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function NavButton({ children, onClick, className }: Props) {
  return (
    <button
      className={cn(
        "px-4 py-4 h-full hover:bg-accent hover:text-accent-foreground",
        "transition-colors duration-300",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
