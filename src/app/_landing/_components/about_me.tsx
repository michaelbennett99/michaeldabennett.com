import { default as AboutMeBase } from "@/app/_components/about_me";
import Subsection from "./subsection";

export default function AboutMe() {
  return (
    <Subsection title="About Me">
      <AboutMeBase abridged={true} />
    </Subsection>
  );
}
