import { cn } from '@/lib/utils'

export default function Container(
  { children, className }: { children: React.ReactNode, className?: string }
) {
  return (
    <div
      className={cn("mx-8 md:mx-16 lg:mx-auto lg:max-w-4xl mb-16", className)}
    >
      {children}
    </div>
  );
}
