import CardHeader from "./card_header";
import CardBody from "./card_body";

type Props = {
  title: string;
  year: number;
  description: string;
}

export default function AwardsCard({ title, year, description }: Props) {
  return (
    <div>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:justify-between md:gap-2">
          <div><strong>{title}</strong></div>
          <div>{year}</div>
        </div>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </div>
  )
}
