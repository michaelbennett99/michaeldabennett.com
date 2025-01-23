"use client";

import { Project } from "@/interfaces/project";
import { useEffect, useState } from "react";
import markdownToHtml from "@/lib/markdownToHtml";

import ProjectCardHeader from "@/components/projects/project_card_header";

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
    <div
      className="space-y-2 [&_.project-title]:text-2xl [&_.project-title]:font-bold [&_.github-icon]:text-lg"
    >
      <ProjectCardHeader project={project} />
      <div
        className="[&>ul]:list-disc [&>ul]:list-outside [&>ul]:ml-4 [&>ul>li>ul]:list-[circle] [&>ul>li>ul]:ml-4 [&>ul]:ms-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
