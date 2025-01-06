export default function AboutMe({
  abridged = false,
}: {
  abridged?: boolean;
}) {
  const paragraphs = [
    "As a software engineer and data scientist, I combine analytical rigour with practical software engineering expertise. My background in Economics from Cambridge and Yale taught me to break down complex problems and approach them systematically. It is how I originally became interested in computer science and got the opportunity to develop software for academic projects in Economics and Genetics. After completing my Master's degree, I decided to transition fully into software engineering, where the skills I developed as an economist now serve me well in developing robust software solutions.",
    "In my professional work, I've developed software to analyze genetic datasets exceeding 1TB at the National Bureau of Economic Research, creating efficient processing pipelines that reduced complex analysis times to under an hour. Beyond my professional experience, I have designed and developed full-stack web applications from conception to production using modern technologies like TypeScript, Go, and Next.js. These projects range from data visualization tools to interactive web applications, demonstrating my ability to architect complete solutions from database design to user interface implementation.",
    "I work across multiple languages and technologies, applying my analytical mindset to challenges in both software engineering and data science. In fact, I particularly enjoy learning new technologies and languages, and I like to have competency in as broad of a tech stack as possible. Switching from thinking functionally in a language like Haskell to writing object-oriented code in C++ has broadened my mind to a range of problem-solving approaches, which is both intellectually stimulating and helpful when faced with a difficult problem.",
    "Through my projects and professional work, I've developed expertise in computational efficiency, full-stack development, and machine learning, as well as in the ability to quickly and independently pick up new languages and technologies. I'm currently seeking opportunities to leverage these skills in challenging software engineering or data science roles where I can build systems that will have a meaningful impact.",
  ];


  const selectedParagraphs = abridged ? paragraphs.slice(0, 1) : paragraphs;
  return (
    <div className="flex flex-col gap-4">
      {selectedParagraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
