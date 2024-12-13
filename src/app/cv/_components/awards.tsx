import { getAllAwards } from "@/lib/api";
import AwardsCard from "./awards_card";

export default function Awards() {
  const awards = getAllAwards();

  return (
    <>
      {awards.map((award) => (
        <AwardsCard
          key={award.title.toLowerCase().replace(/\s+/g, '_')}
          {...award}
        />
      ))}
    </>
  );
}
