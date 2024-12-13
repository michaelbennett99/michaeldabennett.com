import Link from "next/link";
import { FaGithub } from "react-icons/fa";

import CardHeader from "./card_header";
import CardBody from "./card_body";

export default function ProjectCard({
  name,
  url,
  githubUrl,
  description,
}: {
  name: string;
  url?: string;
  githubUrl?: string;
  description: string;
}) {
  return (
    <div>
      <CardHeader>
        <div className="flex flex-row justify-left items-center gap-2">
          <h3 className="font-bold">
            { url
              && <Link href={url} className="hover:underline">{name}</Link>
              || <span>{name}</span>
            }
          </h3>
          { githubUrl && <Link href={githubUrl}><FaGithub/></Link> }
        </div>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
    </div>
  );
}
