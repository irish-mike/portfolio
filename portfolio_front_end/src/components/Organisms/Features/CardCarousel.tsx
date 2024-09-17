import { ThumbnailCardGrid } from "@components";
import { Post } from "@entities";
import { useCarouselItems } from "@hooks";
import { useCarouselStore } from "@state";
import { Carousel } from "react-bootstrap";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

interface Props {
  cards: Post[];
}

const CardCarousel = ({ cards }: Props) => {
  const index = useCarouselStore((state) => state.index);
  const setIndex = useCarouselStore((state) => state.setIndex);
  const carouselItems = useCarouselItems(cards);

  const handlePrev = () => {
    const newIndex = index === 0 ? carouselItems.length - 1 : index - 1;
    setIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = index === carouselItems.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
  };

  return (
    <div className="custom-carousel-container">
      <Carousel touch wrap indicators={false} controls={false} interval={10000} activeIndex={index} onSelect={setIndex} className="carousel-inner-container py-3">
        {carouselItems.map((itemCards, idx) => (
          <Carousel.Item key={idx}>
            <ThumbnailCardGrid posts={itemCards} />
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Custom controls */}
      <div className="custom-carousel-control-prev" onClick={handlePrev}>
        <BsChevronLeft />
      </div>
      <div className="custom-carousel-control-next" onClick={handleNext}>
        <BsChevronRight />
      </div>
    </div>
  );
};

export default CardCarousel;
