import { cn } from "@/lib/utils";

export default function CardHeader(
  { children, className }: { children: React.ReactNode, className?: string }
) {
  return (
    <header className={cn("text-lg", className)}>
      {children}
    </header>
  );
}
