import Bullets from "./bullets";

type Props = {
  title: React.ReactNode;
  bullets: React.ReactNode[];
};

export default function EducationProject({ title, bullets }: Props) {
  return (
    <div>
      <h4>{title}</h4>
      <Bullets bullets={bullets} />
    </div>
  );
}
