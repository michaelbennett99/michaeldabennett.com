export default function Bullets({ bullets }: { bullets: string[] }) {
  return (
    <ul>
      {bullets.map((bullet) => (
        <li key={bullet} className="list-disc list-inside">
          {bullet}
        </li>
      ))}
    </ul>
  );
}
