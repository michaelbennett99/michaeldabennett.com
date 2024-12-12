import Container from "@/components/container";
import PageHeading from "@/components/page_heading";
import Section from "./_components/section";
import Card from "./_components/card";
import EducationCard from "./_components/education_card";

export default function CV() {
  return (
    <main>
      <Container>
        <PageHeading title="CV" />
        <div>
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
                title: "Example Project: Object detection of cars from satellite images using Deep Learning.",
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
                title: "Dissertation: The Effect of the Minimum Wage on Employment",
                bullets: [
                  "Used a difference-in-differences approach to estimate the effect of the minimum wage on employment",
                  "Found that the minimum wage has a significant negative effect on employment",
                ],
              }}
            />
          </Section>
          <Section title="Professional Experience">
            <Card />
          </Section>
          <Section title="Leadership Experience">
            <Card />
          </Section>
          <Section title="Publications">
            <Card />
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
