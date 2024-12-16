import Main from "@/components/main";
import Container from "@/components/container";
import PageHeading from "@/components/page_heading";

import Section from "./_components/section";
import Skills from "./_components/skills/skills";
import DownloadCV from "@/components/download_cv";
import Projects from "./_components/projects";
import Education from "./_components/education";
import Experience from "./_components/experience";
import Leadership from "./_components/leadership";
import Awards from "./_components/awards";
import Publications from "./_components/publications";


export default function CV() {
  return (
    <Main>
      <Container>
        <PageHeading title="CV" />
        <div className="flex justify-center my-8">
          <DownloadCV />
        </div>
        <div className="mt-8 mb-16">
          <Section title="Education">
            <Education />
          </Section>
          <Section title="Professional Experience">
            <Experience />
          </Section>
          <Section title="Leadership Experience">
            <Leadership />
          </Section>
          <Section title="Publications">
            <Publications />
          </Section>
          <Section title="Independent Projects">
            <Projects />
          </Section>
          <Section title="Skills">
            <Skills />
          </Section>
          <Section title="Awards">
            <Awards />
          </Section>
        </div>
      </Container>
    </Main>
  );
}
