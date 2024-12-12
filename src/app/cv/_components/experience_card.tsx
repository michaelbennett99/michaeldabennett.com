import Bullets from "./bullets";
import CardHeader from "./card_header";
import CardBody from "./card_body";

type Props = {
  title: string;
  employer: string;
  location: string;
  start_date: string;
  end_date: string;
  description: string;
  bullets: React.ReactNode[];
};

export default function ExperienceCard({
  title,
  employer,
  location,
  start_date,
  end_date,
  description,
  bullets,
}: Props) {
  return (
    <div className="flex flex-col">
      <CardHeader className="flex flex-col">
        <div className="flex flex-row justify-between gap-2">
          <h3>
            <strong>{title}</strong>
          </h3>
          <p>
            {start_date} - {end_date}
          </p>
        </div>
        <p className="text-base">
          <strong>{employer}, {location}</strong>
        </p>
        <p className="text-base">{description}</p>
      </CardHeader>
      <CardBody>
        <Bullets bullets={bullets} className="text-muted-foreground" />
      </CardBody>
    </div>
  );
}
