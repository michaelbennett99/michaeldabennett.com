import Container from "@/app/_components/container";
import { EXAMPLE_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  preview?: boolean;
}

export default function Alert({ preview }: Props) {
  return (
    <div className="border-b bg-accent/50 border-accent/20">
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <span>
              This page is a preview.{" "}
              <a href="/api/exit-preview" className="underline hover:text-blue-600 duration-200 transition-colors">
                Click here
              </a>
              to exit preview mode.
            </span>
          ) : (
            <span>
              The source code for this blog is available on{" "}
              <a href={`https://github.com/michaelbennett99/${EXAMPLE_PATH}`} className="underline hover:text-blue-600 duration-200 transition-colors">
                GitHub
              </a>
              .
            </span>
          )}
        </div>
      </Container>
    </div>
  )
}
