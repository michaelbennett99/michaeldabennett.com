import Container from "@/components/container";
import PageHeading from "@/components/page_heading";
import AboutMe from "@/app/_components/about_me";
export default function About() {
  return (
    <main className="flex-1">
      <Container>
        <PageHeading title="About" />
        <AboutMe />
      </Container>
    </main>
  );
}
