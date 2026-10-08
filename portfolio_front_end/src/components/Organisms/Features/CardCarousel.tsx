import { ThumbnailCardGrid } from "@components";
import { Post } from "@entities";
import { useEffect, useState, type ReactElement } from "react";
import { Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  cards: Post[];
}

const cardsPerSlide = () => {
  const width = window.innerWidth;
  return width >= 1200 ? 3 : width >= 768 ? 2 : 1;
};

const CardCarousel = ({ cards }: Props): ReactElement | null => {
  const [{ displayCards, selectedIndex }, setCarouselState] = useState(() => ({
    displayCards: cardsPerSlide(),
    selectedIndex: 0,
  }));

  useEffect(() => {
    const handleResize = () => {
      const nextDisplayCards = cardsPerSlide();
      setCarouselState((current) =>
        current.displayCards === nextDisplayCards
          ? current
          : { displayCards: nextDisplayCards, selectedIndex: 0 },
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const carouselItems: Post[][] = [];
  if (cards.length > 0 && cards.length <= displayCards) {
    carouselItems.push(cards);
  } else {
    for (let i = 0; i < cards.length; i += displayCards) {
      const item: Post[] = [];
      for (let j = 0; j < displayCards; j++) {
        item.push(cards[(i + j) % cards.length]);
      }
      carouselItems.push(item);
    }
  }

  const index = Math.min(selectedIndex, Math.max(0, carouselItems.length - 1));
  const setIndex = (nextIndex: number) => {
    setCarouselState((current) => ({ ...current, selectedIndex: nextIndex }));
  };

  const handlePrev = () => {
    const newIndex = index === 0 ? carouselItems.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === carouselItems.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  if (carouselItems.length === 0) {
    return null;
  }

  return (
    <div className="custom-carousel-container">
      <Carousel touch wrap indicators={false} controls={false} interval={10000} activeIndex={index} onSelect={setIndex} className="carousel-inner-container py-3">
        {carouselItems.map((itemCards, idx) => (
          <Carousel.Item key={idx}>
            <ThumbnailCardGrid posts={itemCards} />
          </Carousel.Item>
        ))}
      </Carousel>

      <button type="button" className="custom-carousel-control-prev" onClick={handlePrev} aria-label="Previous featured projects">
        <BsChevronLeft aria-hidden="true" />
      </button>
      <button type="button" className="custom-carousel-control-next" onClick={handleNext} aria-label="Next featured projects">
        <BsChevronRight aria-hidden="true" />
      </button>
    </div>
  );
};

export default CardCarousel;
