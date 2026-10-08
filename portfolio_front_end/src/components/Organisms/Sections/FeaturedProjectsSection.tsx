import { CardCarousel, PostLoadError, Section } from "@components";
import { usePosts } from "@hooks";
import { useEffect, type ReactElement } from "react";

const FeaturedProjectsSection = (): ReactElement => {
  const { postsRequest, getPosts } = usePosts();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Section title="Featured Projects">
      {postsRequest.status === "error" ? (
        <PostLoadError message="Featured projects could not be loaded right now." />
      ) : postsRequest.status === "success" && postsRequest.posts.length > 0 ? (
        <CardCarousel cards={postsRequest.posts} />
      ) : postsRequest.status === "success" ? (
        <p>No featured projects yet.</p>
      ) : (
        <p role="status">Loading featured projects...</p>
      )}
    </Section>
  );
};

export default FeaturedProjectsSection;
