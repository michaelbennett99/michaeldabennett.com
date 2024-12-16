import Main from "@/components/main";
import Container from "@/components/container";
import PageHeading from "@/components/page_heading";
import Form from "./_components/form";

export default function Contact() {
  return (
    <Main>
      <Container className="lg:max-w-2xl">
        <PageHeading title="Contact" />
        <Form />
      </Container>
    </Main>
  );
}
