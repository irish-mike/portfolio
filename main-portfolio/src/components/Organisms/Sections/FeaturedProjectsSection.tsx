import { ThumbnailCardProps } from "src/components/Molecules/Cards/ThumbnailCard";
import ThumbnailCardGrid from "../Grids/ThumbnailCardGrid";

const cards: ThumbnailCardProps[] = [
    {
        title: "Card 1",
        description: "This is the description for card 1",
        date: "2024-01-01",
        image: "https://via.placeholder.com/150",
        link: "#"
    },
    {
        title: "Card 2",
        description: "This is the description for card 2",
        date: "2024-01-02",
        image: "https://via.placeholder.com/150",
        link: "#"
    },
    {
        title: "Card 3",
        description: "This is the description for card 3",
        date: "2024-01-02",
        image: "https://via.placeholder.com/150",
        link: "#"
    }
];

const FeaturedProjectsSection = () => {
    return (
        <section className="mt-5 p-4">
            <h3>Featured Projects</h3>
            <ThumbnailCardGrid cards={cards} />
        </section>
    );
}

export default FeaturedProjectsSection;