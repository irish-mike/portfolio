import { Carousel, Row, Col } from "react-bootstrap";
import { ThumbnailCardProps } from "../Molecules/Cards/ThumbnailCard";
import ThumbnailCardGrid from "./Grids/ThumbnailCardGrid";

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';  // Using Bootstrap Icons
import useCarouselItems from "../../hooks/useCarouselItems";
import useCarouselStore from "../../state/carouselStore";

interface Props {
    cards: ThumbnailCardProps[];
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

            <Row className="py-2">
                <Col>
                    <Carousel
                        touch
                        wrap
                        indicators={false}
                        controls={false}
                        interval={10000}
                        activeIndex={index}
                        onSelect={setIndex}
                    >
                        {carouselItems.map((itemCards, idx) => (
                            <Carousel.Item key={idx}>
                                <ThumbnailCardGrid cards={itemCards} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>

            <Row className="position-relative py-2">
                <Col className="d-flex justify-content-start">
                    <div className="custom-carousel-control-prev" onClick={handlePrev}>
                        <BsChevronLeft />
                    </div>
                </Col>
                <Col className="d-flex justify-content-end">
                    <div className="custom-carousel-control-next" onClick={handleNext}>
                        <BsChevronRight />
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default CardCarousel;
