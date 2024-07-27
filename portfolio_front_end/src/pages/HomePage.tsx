import { AboutSection, FeaturedProjectsSection, SkillsSection, TextContentSection, TimelineSection } from "@components";

const HomePage = () => {
  return (
    <>
      <TextContentSection title={"Michael Grinnell"} description={"Software Engineer with emphasis on games and audio programming, at the intersection of creativity and technical skills."} />
      <AboutSection title={"About Me"}>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
          readable English.
        </p>
        <p>
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected
          humour and the like).
        </p>
      </AboutSection>

      <FeaturedProjectsSection />

      <SkillsSection />

      <TimelineSection />
    </>
  );
};

export default HomePage;
