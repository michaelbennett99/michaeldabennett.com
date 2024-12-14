export default function Subsection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={title.toLowerCase().replace(/\s+/g, "_")}
      className="my-4 md:my-8 mx-auto px-4 md:px-8 box-content"
    >
      <h2 className="text-3xl font-bold text-center my-8">{title}</h2>
      {children}
    </section>
  );
}
