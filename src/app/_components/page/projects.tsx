import Subsection from "./subsection";
import ProjectCard from "./project_card";

export default function Projects() {
  return (
    <Subsection title="Projects">
      <ul className="flex flex-col justify-center gap-4">
        <li key="stagehunter">
          <ProjectCard
            name="StageHunter"
            url="https://stagehunter.cc"
            githubUrl="https://github.com/michaelbennett99/stagehunter"
            description="A daily web game that tests users’ pro cycling knowledge. Built using Typescript and Next.js (frontend), Go (backend), Postgres + PostGIS (database), AWS (hosting) and Cloudflare (DNS)."
          />
        </li>
        <li key="michaeldabennett.com">
          <ProjectCard
            name="michaeldabennett.com"
            url="/"
            githubUrl="https://github.com/michaelbennett99/michaeldabennett.com"
            description="My personal website, built as a static site using Next.js, Tailwind CSS, and TypeScript, hosted on AWS S3 and ..."
          />
        </li>
        <li key="rusty_chess_clock">
          <ProjectCard
            name="Rusty Chess Clock"
            url="https://crates.io/crates/rusty_chess_clock"
            githubUrl="https://github.com/michaelbennett99/rusty_chess_clock"
            description="Customisable chess clock GUI (using iced-rs) and CLI (using termion) application implemented in Rust, backed by a zero-dependency library providing a chess clock API. Built as a quick rust exercise to practice the language and a slightly lengthier exercise to learn one method for building a GUI application."
          />
        </li>
        <li key="gendata.py">
          <ProjectCard
            name="gendata.py"
            url="https://michaelbennett99.github.io/gendata_package/index.html"
            githubUrl="https://github.com/michaelbennett99/gendata_package"
            description="A Python package that provides a very simple interface for reading and performing simple operations on human genetic data in bed/bim/fam format, documented using Sphinx."
          />
        </li>
        <li key="numericalMethods.jl">
          <ProjectCard
            name="NumericalMethods.jl"
            url="https://michaelbennett99.github.io/NumericalMethods.jl/current/"
            githubUrl="https://github.com/michaelbennett99/NumericalMethods.jl"
            description="Provides custom pure-julia numerical methods for the differentiation, interpolation, minimisation and root finding of univariate and multivariate functions."
          />
        </li>
        <li key="BellmanSolver.jl">
          <ProjectCard
            name="BellmanSolver.jl"
            url="https://michaelbennett99.github.io/BellmanSolver.jl/current/"
            githubUrl="https://github.com/michaelbennett99/BellmanSolver.jl"
            description="A Julia package which provides methods for solving dynamic programming problems of one choice variable using Value Function Iteration or the Endogenous Grid Method."
          />
        </li>
        <li key="AiyagariVFI">
          <ProjectCard
            name="Aiyagari_VFI"
            url="https://michaelbennett99.github.io/Aiyagari_VFI_graphs/"
            githubUrl="https://github.com/michaelbennett99/Aiyagari_VFI_graphs"
            description="A static website that presents a piece of graduate school Economics coursework and some interactive 3d graphs produced for it in an attractive and approachable manner."
          />
        </li>
      </ul>
    </Subsection>
  )
}
