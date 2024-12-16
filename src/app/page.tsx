import Main from "@/components/main";
import Container from "@/components/container";

import Header from "@/app/_landing/_components/header";
import AboutMe from "@/app/_landing/_components/about_me";
import Projects from "@/app/_landing/_components/projects";

export default function Home() {
  return (
    <Main>
      <Container className="divide-solid divide-y text-lg mx-6">
        <Header />
        <AboutMe />
        <Projects />
      </Container>
    </Main>
  );
}
