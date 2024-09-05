import CardCarousel from "../Features/CardCarousel";
import Section from "../Layouts/Section";
import { posts } from "@data";

const FeaturedProjectsSection = () => {
  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts.results} />
    </Section>
  );
};

export default FeaturedProjectsSection;
