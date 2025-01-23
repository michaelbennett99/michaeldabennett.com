import Subsection from "../subsection";

type Props = {
  title: string;
  children?: React.ReactNode;
}

export default function SkillsSection({ title, children }: Props) {
  return (
    <Subsection title={title}>
      {children}
    </Subsection>
  );
}
