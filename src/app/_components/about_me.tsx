export default function AboutMe({
  abridged = false,
}: {
  abridged?: boolean;
}) {
  const paragraphs = [
    "I’m a full-stack software developer and data engineer who combines software engineering expertise with strong data and problem-solving skills. With over two years of professional software development and data engineering experience, I’ve developed performant CLI tools and pipelines to process and analyze large-scale datasets, including genetics and geospatial data, using Python, Julia, and Go. From my education in Economics at Cambridge and Yale, I have advanced skills in mathematical modelling, statistics and machine learning.",
    "In my free time, I’m working on a project to centralize and archive historical professional cycling data and interactive applications to use it. I’m also self-studying topics in computer architecture, networking, and distributed systems to deepen my technical expertise.",
  ];


  const selectedParagraphs = abridged ? paragraphs.slice(0, 4) : paragraphs;
  return (
    <div className="flex flex-col gap-4">
      {selectedParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
