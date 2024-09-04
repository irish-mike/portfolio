import { AboutSection, FeaturedProjectsSection, SkillsSection, TextContentSection, TimelineSection } from "@components";

const HomePage = () => {
  return (
    <>
      <TextContentSection title={"Michael Grinnell"} description={"Software Developer with a Passion for Games, Audio, and Pragmatic Programming."} />
      <AboutSection title={"About Me"}>
        <p className="text-background">Being a software developer isn't just about writing code; it's about creating solutions, solving problems, and bringing ideas to life!</p>
        <p className="text-background">Whether I’m developing a full-scale application or crafting the perfect taco recipe, the sense of accomplishment that comes from turning an idea into reality is what drives me.</p>
        <p className="text-background">I am currently located in Valencia, Spain, am proficient in Spanish at a B1 level, and am aiming for fluency. I have dual US and Irish citizenship and am open to relocation for the right opportunity.</p>
      </AboutSection>

      <FeaturedProjectsSection />

      <SkillsSection />

      <TimelineSection />
    </>
  );
};

export default HomePage;
