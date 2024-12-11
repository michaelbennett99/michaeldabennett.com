export default function PageHeading({
  title,
}: {
  title: string;
}) {
  return <h1 className="text-3xl font-bold text-center my-8">{title}</h1>;
}
