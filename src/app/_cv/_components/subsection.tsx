export default function Subsection(
  { title, children }: { title: string, children?: React.ReactNode }
) {
  return (
    <div className="my-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <div className="my-2">{children}</div>
    </div>
  );
}
