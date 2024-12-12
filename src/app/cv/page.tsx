import Container from "@/components/container";
import PageHeading from "@/components/page_heading";

import Section from "./_components/section";
import Card from "./_components/card";
import EducationCard from "./_components/education_card";
import ExperienceCard from "./_components/experience_card";
import PublicationCard from "./_components/publication_card";

export default function CV() {
  return (
    <main>
      <Container>
        <PageHeading title="CV" />
        <div className="text-justify">
          <Section title="Education">
            <EducationCard
              degree="MA Economics"
              institution="Yale University"
              location="New Haven, CT"
              start_year={2022}
              end_year={2024}
              grade="Honors"
              modules={[
                "Microeconomics",
                "Macroeconomics",
                "Econometrics",
                "Algorithms",
                "Deep Learning",
              ]}
              project={{
                title: (
                  <p>
                    <span className="underline">Example Project:</span> Object
                    detection of cars from satellite images using Deep Learning.
                  </p>
                ),
                bullets: [
                  "Trained, fine-tuned and evaluated YOLOv8n/s/m object detection models on aerial images.",
                  "Used remote GPU rented via vast.ai, initialised using custom Docker image, increasing training speed over 100x at cost under $10.",
                  "Wrote custom dataloaders in python to download large image datasets on remote servers at maximal speed, reducing GPU downtime cost.",
                ],
              }}
            />
            <EducationCard
              degree="BA Economics"
              institution="University of Cambridge"
              location="Cambridge, UK"
              start_year={2017}
              end_year={2020}
              grade="First Class"
              modules={[
                "Microeconomics",
                "Macroeconomics",
                "Advanced Econometrics",
                "Real Analysis",
              ]}
              project={{
                title: (
                  <p>
                    <span className="underline">Dissertation:</span> The Effect of the Minimum Wage on Employment
                  </p>
                ),
                bullets: [
                  "Used a difference-in-differences approach to estimate the effect of the minimum wage on employment",
                  "Found that the minimum wage has a significant negative effect on employment",
                ],
              }}
            />
          </Section>
          <Section title="Professional Experience">
            <ExperienceCard
              title="Graduate Research Assistant"
              employer="Yale University"
              location="New Haven, CT"
              start_date="Oct 2023"
              end_date="June 2024"
              description="Research software development for project on economic growth and clean energy."
              bullets={[
                "Created UML package and object diagrams to visualise and then improve software architecture for better performance, usability, and maintainability.",
                "Implemented improved architecture in Julia, upgrading user interface, data processing and first stage solution modules from MATLAB scripts to Julia command line application, leading to 50% runtime improvement and more transparent interface.",
                "Used Documenter.jl and GitHub Actions to produce automatically updating website of code documentation, eliminating documentation duplication and improving ease of interaction.",
                "Used Python to collect, visualise and analyse geospatial economic and climate data to quantify the empirical relationship between climate and productivity within geographical regions.",
              ]}
            />
            <ExperienceCard
              title="Genoeconomics Research Assistant"
              employer="National Bureau of Economic Research"
              location="Cambridge, MA"
              start_date="Jul 2020"
              end_date="Jun 2022"
              description="Research software development in a cross-disciplinary statistical genetics and economics lab."
              bullets={[
                "Developed two command line applications for genetic data analysis on large human genetic datasets using Python, enabling complex analyses to run in under one hour. Used just-in-time compilation via numba to achieve better performance on non-vectorisable operations.",
                "Designed and implemented internal pipelines using Python, bash, and third-party CLI tools such as PLINK for processing of genetic datasets with sizes between 100GB and 1TB on remote high-performance machines.",
                "Devised methodology to standardize measures of educational attainment across several national-level datasets. Authored the corresponding section in the resulting paper, published in Nature Genetics (2022) with 204 citations as of August 2024.",
                "Developed visualisation software using Python and matplotlib to produce custom publication-ready graphs (including Manhattan plots) and tables, saving development time for other team-members and allowing rapid automated edits prior to submission and resubmission.",
              ]}
            />
            <ExperienceCard
              title="Operations Research Intern"
              employer="Department for Work and Pensions, HM Government"
              location="London, UK"
              start_date="Jul 2019"
              end_date="Sep 2019"
              description="Researched the extent to which the demographic and socioeconomic backgrounds of working age benefit claimants could predict whether they would contact their administrative authority."
              bullets={[
                "Worked with colleagues to gain access to source data, built a working database for analysis from source data using SQL, and automated and documented this process for use by future researchers.",
                "Performed exploratory analysis, applied machine learning techniques to develop forecasting methodology and produced visualisations using R."
              ]}
            />
          </Section>
          <Section title="Leadership Experience">
            <ExperienceCard
              title="Project Manager & Treasurer"
              employer="Effective Altruism Cambridge"
              location="Cambridge, UK"
              start_date="Mar 2019"
              end_date="Feb 2020"
              description="Student-run organisation at the University of Cambridge."
              bullets={[
                "Chaired leadership committee meetings and managed a team of 10 other volunteers to plan and run 40 events, achieving 20% increase in attendance compared to the previous year.",
                "Authored grant applications leading to £5000 in funding.",
              ]}
            />
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
            <Card />
          </Section>
          <Section title="Skills">
            <Card />
          </Section>
          <Section title="Awards">
            <Card />
          </Section>
        </div>
      </Container>
    </main>
  );
}
