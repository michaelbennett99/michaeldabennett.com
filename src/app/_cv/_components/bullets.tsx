import { cn } from "@/lib/utils";

export default function Bullets(
  { bullets, className }: { bullets: React.ReactNode[], className?: string }
) {
  return (
    <div className={cn("pl-4", className)}>
      <ul className="list-disc list-outside">
        {bullets.map((bullet, index) => (
          <li key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
