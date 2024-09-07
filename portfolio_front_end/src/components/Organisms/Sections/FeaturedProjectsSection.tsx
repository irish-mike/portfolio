import { CardCarousel, Section } from "@components";
import { posts } from "@data";
import { ThumbnailPost } from "@entities";

const FeaturedProjectsSection = () => {
  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts.results as ThumbnailPost[]} />
    </Section>
  );
};

export default FeaturedProjectsSection;
