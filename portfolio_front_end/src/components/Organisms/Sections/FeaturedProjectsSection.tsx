import { CardCarousel, Section } from "@components";
import { usePosts } from "@hooks";
import { useEffect } from "react";

const FeaturedProjectsSection = () => {
  const { posts, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Section title="Featured Projects">
      <CardCarousel cards={posts} />
    </Section>
  );
};

export default FeaturedProjectsSection;
