type Props = {
  title: string;
  year: string;
  authorString: string;
  journalString: string;
}

export default function PublicationCard(
  { title, year, authorString, journalString }: Props
) {
  return (
    <p className="text-base">
      <strong>{authorString} ({year}).</strong> <i>{title}</i>. {journalString}.
    </p>
  );
}
