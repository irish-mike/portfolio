import { CardCarousel, Section } from "@components";
import { posts } from "@data";

const FeaturedProjectsSection = () => {
  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts.results} />
    </Section>
  );
};

export default FeaturedProjectsSection;
