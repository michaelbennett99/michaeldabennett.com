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
        <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
          <div className="flex flex-col">
            <h3>
              <strong>{title}</strong>
            </h3>
            <p className="text-base">
              <strong>{employer}, {location}</strong>
            </p>
          </div>
          <p className="text-base">
            {start_date} - {end_date}
          </p>
        </div>
        <p className="text-base">{description}</p>
      </CardHeader>
      <CardBody>
        <Bullets bullets={bullets} className="text-muted-foreground" />
      </CardBody>
    </div>
  );
}
