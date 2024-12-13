import { getAllAwards } from "@/lib/api";
import AwardsCard from "./awards_card";

export default function Awards() {
  const awards = getAllAwards();

  return (
    <ul className="flex flex-col gap-2">
      {awards.map((award) => (
        <li key={award.title.toLowerCase().replace(/\s+/g, '_')}>
          <AwardsCard {...award} />
        </li>
      ))}
    </ul>
  );
}
