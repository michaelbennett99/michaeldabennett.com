import Container from "@/components/container";
import PageHeading from "@/components/page_heading";

import Section from "./_components/section";
import ExperienceCard from "./_components/experience_card";
import PublicationCard from "./_components/publication_card";
import Skills from "./_components/skills";
import AwardsCard from "./_components/awards_card";
import DownloadCV from "@/components/download_cv";
import Projects from "./_components/projects";
import Education from "./_components/education";
import Experience from "./_components/experience";
import Leadership from "./_components/leadership";

export default function CV() {
  return (
    <main>
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
            <PublicationCard
              title="Polygenic prediction within and between families from a 3-million-person GWAS of educational attainment"
              year="2022"
              authorString="[Fifth Author] Okbay, A. et al."
              journalString="Nature Genetics 54, 437-449"
            />
            <PublicationCard
              title="Resource Profile and User Guide of the Polygenic Index Repository"
              year="2021"
              authorString="[Sixth Author] Becker, J. et al."
              journalString="Nature Human Behaviour 5, 1744-1758"
            />
            <PublicationCard
              title="Family-based genome-wide association study designs for increased power and robustness"
              year="2025"
              authorString="J. Guan, T. Tan, S. M. Nehzati, M. Bennett, P. Turley, D. J. Benjamin, and A. Strudwick Young"
              journalString="Nature Genetics"
              className="hidden"
            />
          </Section>
          <Section title="Independent Projects">
            <Projects />
          </Section>
          <Section title="Skills">
            <Skills />
          </Section>
          <Section title="Awards">
            <AwardsCard
              title="Forethought Foundation Dissertation Commendation Award"
              year="2020"
              description="Awarded to dissertations that communicate insights relevant to the problem of global priority-setting."
            />
            <AwardsCard
              title="Adam Smith Dissertation Prize"
              year="2020"
              description="Awarded to the best dissertation among all University of Cambridge Economics students."
            />
            <AwardsCard
              title="Wright Prize"
              year="2019"
              description="Awarded for a First Class Examination result of special merit in official University Examinations."
            />
            <AwardsCard
              title="St John’s College Pre-Admissions Prize"
              year="2017"
              description="Awarded for exceptional academic achievements prior to admission to St John’s College, Cambridge."
            />
          </Section>
        </div>
      </Container>
    </main>
  );
}
