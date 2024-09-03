import { AboutSection, FeaturedProjectsSection, SkillsSection, TextContentSection, TimelineSection } from "@components";

const HomePage = () => {
  return (
    <>
      <TextContentSection title={"Michael Grinnell"} description={"Experienced software engineer with emphasis on games and audio programming, combining creativity and technical skills."} />
      <AboutSection title={"About Me"}>
        <p className="text-background">Being a software developer isn't just about writing code; it's about creating elegant solutions, solving complex problems and bringing innovative ideas to life!</p>
        <p className="text-background">This what I do, whether I'm building a full-scale application or perfecting a recipe for the best taco you've ever tasted! The sense of achievement from creating something great is what drives me every day.</p>
        <p className="text-background">I am currently located in Valencia, Spain, am proficient in Spanish at a B1 level, aiming for fluency. I have dual US and Irish citizenship and am open to relocation for the right opportunity.</p>
      </AboutSection>

      <FeaturedProjectsSection />

      <SkillsSection />

      <TimelineSection />
    </>
  );
};

export default HomePage;
