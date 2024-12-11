import Container from "@/components/container";
import Header from "./_components/page/header";
import AboutMe from "./_components/page/about_me";
import Projects from "./_components/page/projects";

export default function Home() {
  return (
    <main>
      <Container className="divide-solid divide-y">
        <Header />
        <AboutMe />
        <Projects />
      </Container>
    </main>
  );
}
