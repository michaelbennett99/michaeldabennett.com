export default function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-8 mx-auto px-8 max-w-3xl box-content">
      <h2 className="text-3xl font-bold text-center my-8">{title}</h2>
      {children}
    </section>
  );
}
