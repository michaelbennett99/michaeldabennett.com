export default function Bullets({ bullets }: { bullets: React.ReactNode[] }) {
  return (
    <div className="pl-4">
      <ul className="list-disc list-outside">
        {bullets.map((bullet, index) => (
          <li key={index}>
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
