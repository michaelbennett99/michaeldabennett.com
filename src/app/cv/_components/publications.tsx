import { getAllPublications } from "@/lib/api";
import PublicationCard from "./publication_card";

export default function Publications() {
  const publications = getAllPublications();

  return (
    <ul className="flex flex-col gap-2">
      {publications.map((publication) => (
        <li key={publication.title.toLowerCase().replace(/\s+/g, '_')}>
          <PublicationCard
            {...publication}
            className={publication.hidden ? "hidden" : ""}
          />
        </li>
      ))}
    </ul>
  );
}
