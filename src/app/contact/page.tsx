import Container from "@/components/container";
import PageHeading from "@/components/page_heading";
import Form from "./_components/form";

export default function Contact() {
  return (
    <main className="flex-1">
      <Container className="lg:max-w-2xl">
        <PageHeading title="Contact" />
        <Form />
      </Container>
    </main>
  );
}
