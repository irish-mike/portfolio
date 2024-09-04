import { ThumbnailCardProps } from "../../Molecules/Cards/ThumbnailCard";
import CardCarousel from "../Features/CardCarousel";
import Section from "../Layouts/Section";

const cards: ThumbnailCardProps[] = [
  {
    title: "Portfolio Website",
    description: "This website you are on right now! Built with React, TypeScript, and Bootsrap.",
    date: "04-09-2024",
    image: "/src/assets/images/thumbnails/portfolio_screenshot.png",
    link: "#"
  },
  {
    title: "Home Media Server",
    description: "My home media server project that I set up on linux with docker and plex.",
    date: "2024-01-02",
    image: "/src/assets/images/thumbnails/home_media_server_thumbnail.png",
    link: "#"
  },
  {
    title: "VST Sampler Plugin",
    description: "A VST3 Sampler plugin built in C++ using the Juce Audio Framework.",
    date: "2024-01-02",
    image: "/src/assets/images/thumbnails/juce_thumbnail.png",
    link: "#"
  },
  {
    title: "Phever TV-Radio",
    description: "Website I built for Phever.ie, a Dublin based radio station.",
    date: "2024-01-02",
    image: "/src/assets/images/thumbnails/phever_thumbnail.png",
    link: "#"
  }
];

const FeaturedProjectsSection = () => {
  return (
    <Section title="Featured Projects">
      <CardCarousel cards={cards} />
    </Section>
  );
};

export default FeaturedProjectsSection;
