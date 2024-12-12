import { cn } from '@/lib/utils'

export default function Container(
  { children, className }: { children: React.ReactNode, className?: string }
) {
  return (
    <div
      className={cn("mx-2 md:mx-8 lg:mx-auto lg:max-w-4xl", className)}
    >
      {children}
    </div>
  );
}
