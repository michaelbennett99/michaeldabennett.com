import { Button } from "@/components/ui/button";
import { SiReaddotcv } from "react-icons/si";
import Link from "next/link";

export default function DownloadCV() {
  return (
    <Button asChild>
      <Link href="/resume.pdf" target="_blank">
        <SiReaddotcv /> Download CV
      </Link>
    </Button>
  )
}
