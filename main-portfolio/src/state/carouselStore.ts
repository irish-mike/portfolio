import { create } from 'zustand';

interface CarouselState {
    index: number;
    setIndex: (index: number) => void;
    displayCards: number;
    setDisplayCards: (cards: number) => void;
    handleResize: () => void;
}

const useCarouselStore = create<CarouselState>((set) => ({
    index: 0,
    setIndex: (index) => set({ index }),
    displayCards: 1,
    setDisplayCards: (cards) => set({ displayCards: cards }),
    handleResize: () => {
        const width = window.innerWidth;
        set({
            displayCards: width >= 1200 ? 4 : width >= 768 ? 2 : 1,
        });
    },
}));

export default useCarouselStore;
