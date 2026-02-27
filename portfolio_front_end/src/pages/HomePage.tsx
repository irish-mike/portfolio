import {
  AboutSection,
  FeaturedProjectsSection,
  SkillsSection,
  TextContentSection,
  TimelineSection,
} from "@components";

const HomePage = () => {
  return (
    <>
      <TextContentSection
        title={"Michael Grinnell"}
        description={
          "Software Engineer specialising in building scalable systems, pragmatic architecture, and reliable infrastructure."
        }
      />
      <AboutSection title={"About Me"}>
        <p className="text-background">
          I build software that works, scales, and stays out of the way. With a
          background spanning{" "}
          <strong>
            Full Stack Development and Site Reliability Engineering
          </strong>
          , I focus on delivering pragmatic technical solutions that solve real
          business needs. I’m a firm believer in the{" "}
          <strong>KISS principle</strong>: keeping systems simple, reliable, and
          highly performant.
        </p>
        <p className="text-background">
          Whether I’m optimising an API endpoint or crafting the perfect taco {" "}
          <span
            role="img"
            aria-label="taco"
            style={{ fontSize: "1rem", verticalAlign: "top" }}
          >
            🌮
          </span>
          . I’m driven by the same principle: building something that works and
          solves the right problem. I’d rather rely on proven, well-tested
          approaches than reach for the latest shiny new tools.
        </p>
        <p className="text-background">
          I am a dual US/EU citizen from Ireland, currently based in Valencia,
          Spain (B2 Spanish). I’m seeking opportunities where I can help teams
          reduce technical debt, stabilise infrastructure, and deliver reliable
          products.
        </p>
      </AboutSection>

      <FeaturedProjectsSection />

      <SkillsSection />

      <TimelineSection />
    </>
  );
};

export default HomePage;
