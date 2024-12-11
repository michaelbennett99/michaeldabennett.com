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
        <li key="rusty_chess_clock">
          <ProjectCard
            name="Rusty Chess Clock"
            url="https://crates.io/crates/rusty_chess_clock"
            githubUrl="https://github.com/michaelbennett99/rusty_chess_clock"
            description="Customisable chess clock GUI (using iced-rs) and CLI (using termion) application implemented in Rust, backed by a zero-dependency library providing a chess clock API. Built as a quick rust exercise to practice the language and a slightly lengthier exercise to learn one method for building a GUI application."
          />
        </li>
      </ul>
    </Subsection>
  )
}
