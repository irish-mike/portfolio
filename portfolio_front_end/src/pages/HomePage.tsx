import { AboutSection, FeaturedProjectsSection, SkillsSection, TextContentSection, TimelineSection } from "@components";

const HomePage = () => {
  return (
    <>
      <TextContentSection title={"Michael Grinnell"} description={"Software Engineer with emphasis on games and audio programming, at the intersection of creativity and technical skills."} />
      <AboutSection title={"About Me"}>
        <p className="text-background">
          Experienced full stack developer skilled in writing pragmatic code and creating scalable performance-optimized applications. Committed to ongoing personal and professional growth reflected in personal projects such as VST plugin development, music production, and configuring an Ubuntu
          based home media server.
        </p>
        <p className="text-background">Holding dual US and Irish citizenship, I currently reside in Valencia, Spain, and am proficient in Spanish at a B1 level, aiming for fluency. Open to relocation for the right opportunity.</p>
      </AboutSection>

      <FeaturedProjectsSection />

      <SkillsSection />

      <TimelineSection />
    </>
  );
};

export default HomePage;
