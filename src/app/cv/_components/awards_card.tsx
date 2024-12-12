import CardHeader from "./card_header";
import CardBody from "./card_body";

type Props = {
  title: string;
  year: string;
  description: string;
}

export default function AwardsCard({ title, year, description }: Props) {
  return (
    <div>
      <CardHeader>
        <div className="flex flex-row justify-between">
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
