import { CardCarousel, Section } from "@components";
import { usePosts } from "@hooks";

const FeaturedProjectsSection = () => {
  const posts = usePosts();

  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts} />
    </Section>
  );
};

export default FeaturedProjectsSection;
