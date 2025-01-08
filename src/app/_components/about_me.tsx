export default function AboutMe({
  abridged = false,
}: {
  abridged?: boolean;
}) {
  const paragraphs = [
    "As a software engineer and data scientist with a Master’s degree in Economics from Yale, I bring over two years of professional experience in software development, applied statistics, and data analysis. I am eager to apply my expertise and abilities as a technically skilled, quantitatively-minded self-starter to roles in software development, data engineering, and data science.",
    "My academic background in Economics at Cambridge equipped me with the skills to model and analyse complex problems quantitatively. During this time, I began programming in R and Python to analyse and visualise economic data, where I first learned the fundamentals of programming. This foundation led to my experience writing academic software to analyse large-scale human genetic datasets at the National Bureau of Economic Research. There, I honed my technical expertise by designing tools for end users, optimising performance on high-performance servers, and interacting with academic code of varying quality. This exposure helped me develop a strong sense of good code and the importance of software design, showing me the cost of technical debt. These experiences deepened my passion for computer science and software engineering. At Yale, I expanded my technical expertise through courses in Algorithms, Deep Learning, and Computational Economics, and worked as a graduate research assistant on spatial economics research.",
    "After completing my Master’s degree, I transitioned fully into software engineering, leveraging the analytical rigour and problem-solving skills honed as an economist to build scalable software solutions. In addition to my existing professional work, I have undertaken independent projects to broaden my skill set. For example, I developed StageHunter, a full-stack web application using React, TypeScript, Go, and PostgreSQL, which enhanced my proficiency in API development and working with geographic and geometric data. I’ve also built performance-intensive projects, like a ray tracer in C++, to further refine my low-level, high-performance programming skills.",
    "My technical toolbox includes TypeScript, Go, Python, C++, and Rust, with a solid understanding of software engineering principles such as design patterns, data structures, and algorithm optimisation. I thrive at the intersection of data and technology, leveraging my expertise to drive impactful solutions. I am excited to contribute to organisations pioneering in data-driven software solutions and cutting-edge engineering projects.",
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
