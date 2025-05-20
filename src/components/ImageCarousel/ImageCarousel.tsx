/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import Slider from 'react-slick';
import { CarouselContainer, CarouselImage } from './ImageCarousel.style';
import OrderIndicator from '../OrderIndicator/OrderIndicator';
import { IndicatorPositionStyle } from '../OrderIndicator/OrderIndicator.style';

interface ImageCarouselProps {
  images: string[];
  bottomPadding?: string;
  autoSlideInterval?: number;
  autoplay?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  bottomPadding = '1.1rem',
  autoSlideInterval = 5000,
  autoplay = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 자체 구현한 코드와 같은 기능을 하는 react-slick 설정
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: autoplay && !!autoSlideInterval,
    autoplaySpeed: autoSlideInterval,
    beforeChange: (_: number, nextIndex: number) => {
      setCurrentIndex(nextIndex);
    },
    adaptiveHeight: true // 이미지 높이에 따라 슬라이더 높이 조절
  };

  return (
    <div css={CarouselContainer}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              css={CarouselImage}
            />
          </div>
        ))}
      </Slider>
      <div css={IndicatorPositionStyle(bottomPadding)}>
        <OrderIndicator
          currentIndex={currentIndex}
          totalItems={images.length}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;