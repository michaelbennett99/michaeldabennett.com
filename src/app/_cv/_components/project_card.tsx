import { useEffect, useState } from "react";
import markdownToHtml from "@/lib/markdownToHtml";
import ProjectCardHeader from "@/components/projects/project_card_header";

import CardHeader from "./card_header";
import CardBody from "./card_body";
import { Project } from "@/interfaces/project";

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const [content, setContent] = useState(project.content);

  useEffect(() => {
    async function processMarkdown() {
      const htmlContent = await markdownToHtml(project.content);
      setContent(htmlContent);
    }
    processMarkdown();
  }, [project.content]);

  return (
    <div>
      <CardHeader className="[&_.project-title]:font-bold [&_.github-icon]:text-lg">
        <ProjectCardHeader project={project} />
      </CardHeader>
      <CardBody>
        <div
          className="[&>ul]:list-disc [&>ul]:list-inside [&>ul>li>ul]:ml-4 [&>ul>li>ul]:list-inside [&>ul>li>ul]:list-[circle]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </CardBody>
    </div>
  );
}
