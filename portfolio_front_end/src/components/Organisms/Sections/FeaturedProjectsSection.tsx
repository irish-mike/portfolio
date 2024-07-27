import { ThumbnailCardProps } from "../../Molecules/Cards/ThumbnailCard";
import CardCarousel from "../Features/CardCarousel";
import Section from "../Layouts/Section";

const cards: ThumbnailCardProps[] = [
  {
    title: "Card 1",
    description: "This is the description for card 1  and here is a buunch more text to make it really long",
    date: "2024-01-01",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 2",
    description: "This is the description for card 2",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 3",
    description: "This is the description for card 3",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 4",
    description: "This is the description for card 3",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 5",
    description: "This is the description for card 3",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 6",
    description: "This is the description for card 3",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
    link: "#"
  },
  {
    title: "Card 7",
    description: "This is the description for card 3",
    date: "2024-01-02",
    image: "https://placehold.co/600x600",
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
