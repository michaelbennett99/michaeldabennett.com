import { cn } from "@/lib/utils";

export default function CardBody(
  { children, className }: { children: React.ReactNode, className?: string }
) {
  return (
    <main
      className={cn(
        "flex flex-col text-base text-muted-foreground",
        className
      )}
    >
      {children}
    </main>
  );
}
