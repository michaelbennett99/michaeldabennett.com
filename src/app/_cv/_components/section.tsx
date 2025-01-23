export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={title.toLowerCase().replace(/\s+/g, "_")}>
      <div className="my-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="my-4 space-y-4">{children}</div>
      </div>
    </section>
  );
}
