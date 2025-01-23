import TechIcon from "@/components/tech_icon";

import SocialLink from "@/components/social_link";

export default function Header() {
  return (
    <header className="pt-16 pb-8 flex flex-col items-center gap-4">
      <h1 className="text-8xl font-bold text-center">Michael Bennett</h1>
      <div className="text-4xl text-center" role="doc-subtitle">
        Software & Data Professional
      </div>
      <nav className="flex justify-center gap-4 text-3xl">
        <SocialLink
          href="https://github.com/michaelbennett99"
          icon={<TechIcon icon="github" applyHouseColour />}
        />
        <SocialLink
          href="https://www.linkedin.com/in/mdabennett99"
          icon={<TechIcon icon="linkedin" applyHouseColour />}
        />
      </nav>
    </header>
  );
}
