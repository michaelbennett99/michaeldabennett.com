import { cn } from "@/lib/utils";

type Props = {
  title: string;
  year: number;
  authorString: string;
  journalString: string;
  className?: string;
}

export default function PublicationCard(
  { title, year, authorString, journalString, className }: Props
) {
  return (
    <p className={cn("text-base", className)}>
      <strong>{authorString} ({year}).</strong> <i>{title}</i>. {journalString}.
    </p>
  );
}
