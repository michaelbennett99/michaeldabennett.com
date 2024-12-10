import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaStrava } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { twJoin } from "tailwind-merge";

export default function Home() {
  return (
    <main className="divide-solid divide-y mx-8 lg:mx-auto lg:max-w-4xl">
      <Header />
      <AboutMe />
      <Projects />
    </main>
  );
}

function Header() {
  return (
    <header className="pt-16 pb-8 flex flex-col items-center gap-4">
      <h1 className="text-8xl font-bold text-center">Michael Bennett</h1>
      <div className="text-4xl text-center" role="doc-subtitle">
        Software Engineer
      </div>
      <nav className="flex justify-center gap-4">
        <SocialLink
          href="https://github.com/michaelbennett99"
          icon={<FaGithub />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/michaeldabennett"
          icon={<FaLinkedin />}
        />
        <SocialLink
          href="https://www.strava.com/athletes/25477476"
          icon={<FaStrava />}
        />
      </nav>
      <Button asChild>
        <Link href="/resume.pdf" target="_blank">
          <SiReaddotcv /> Download Resume
        </Link>
      </Button>
    </header>
  );
}

function SocialLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={twJoin(
        "text-4xl box-border",
        "hover:opacity-80"
      )}
      target="_blank"
    >
      {icon}
    </Link>
  );
}

function Subsection({
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

function AboutMe() {
  return (
    <Subsection title="About Me">
      <p className="text-xl text-justify">
        I am a software engineer with a passion for building products that
        make a difference.
      </p>
    </Subsection>
  );
}

function Projects() {
  return (
    <Subsection title="Projects">
      <ul className="flex flex-col justify-center gap-4">
        <li key="project-1">
          <ProjectCard
            name="StageHunter"
            url="https://stagehunter.cc"
            githubUrl="https://github.com/michaelbennett99/stagehunter"
            description="A daily web game that tests users’ pro cycling knowledge. Built using Typescript and Next.js (frontend), Go (backend), Postgres (database), AWS (hosting) and Cloudflare (DNS)."
          />
        </li>
      </ul>
    </Subsection>
  )
}

function ProjectCard({
  name,
  url,
  githubUrl,
  description,
}: {
  name: string;
  url?: string;
  githubUrl?: string;
  description: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex flex-row justify-left items-center gap-2">
        <h3 className="text-2xl font-bold">
          {
            url
            && <Link href={url} className="hover:underline">{name}</Link>
            || <span>{name}</span>
          }
        </h3>
        {
          githubUrl
          && <SocialLink
            href={githubUrl}
            icon={<FaGithub className="text-lg" />}
          />
        }
      </div>
      <p className="text-xl text-justify">{description}</p>
    </div>
  );
}
