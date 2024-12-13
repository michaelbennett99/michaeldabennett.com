import { getAllPublications } from "@/lib/api";
import PublicationCard from "./publication_card";

export default function Publications() {
  const publications = getAllPublications();

  return (
    <>
      {publications.map((publication) => (
        <PublicationCard
          key={publication.title.toLowerCase().replace(/\s+/g, '_')}
          {...publication}
          className={publication.hidden ? "hidden" : ""}
        />
      ))}
    </>
  );
}
