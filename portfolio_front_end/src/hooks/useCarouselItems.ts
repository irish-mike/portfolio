import { Post } from "@entities";
import { useCarouselStore } from "@state";
import { useEffect } from "react";


const useCarouselItems = (cards: Post[]) => {
    const displayCards = useCarouselStore((state) => state.displayCards);
    const handleResize = useCarouselStore((state) => state.handleResize);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Set initial displayCards based on initial window size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const totalCards = cards.length;
    const carouselItems = [];

    if (totalCards <= displayCards) {
        carouselItems.push(cards);
    } else {
        for (let i = 0; i < totalCards; i += displayCards) {
            const item = [];
            for (let j = 0; j < displayCards; j++) {
                item.push(cards[(i + j) % totalCards]);
            }
            carouselItems.push(item);
        }
    }

    return carouselItems;
};

export default useCarouselItems;
