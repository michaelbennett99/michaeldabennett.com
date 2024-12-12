import Bullets from "./bullets";

type Props = {
  title: string;
  bullets: string[];
};

export default function EducationProject({ title, bullets }: Props) {
  return (
    <div>
      <h4>{title}</h4>
      <Bullets bullets={bullets} />
    </div>
  );
}
