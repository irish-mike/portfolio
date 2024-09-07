import { CardCarousel, Section } from "@components";
import { posts } from "@data";
import { Post } from "@entities";

const FeaturedProjectsSection = () => {
  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts.results as Post[]} />
    </Section>
  );
};

export default FeaturedProjectsSection;
