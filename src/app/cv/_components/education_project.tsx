type Props = {
  title: string;
  bullets: string[];
};

export default function EducationProject({ title, bullets }: Props) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {bullets.map((bullet) => (
          <li key={bullet} className="list-disc list-inside">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
