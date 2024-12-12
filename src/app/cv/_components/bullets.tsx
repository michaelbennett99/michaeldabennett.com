export default function Bullets({ bullets }: { bullets: string[] }) {
  return (
    <div className="pl-4">
      <ul className="list-disc list-outside">
        {bullets.map((bullet) => (
          <li key={bullet}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
