import { ReactNode } from "react";

import { cn } from "@/lib/utils";

type Props = {
  children?: ReactNode;
}

export default function PostTitle({ children }: Props) {
  return (
    <h1
      className={cn(
        "text-5xl md:text-7xl lg:text-8xl font-bold",
        "mb-12 text-center md:text-left",
        "tracking-tighter leading-tight md:leading-none"
      )}
    >
      {children}
    </h1>
  )
}
