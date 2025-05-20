/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from 'react';
import { CarouselContainer, ImageContainer, CarouselImage } from './ImageCarousel.style';
import OrderIndicator from '../OrderIndicator/OrderIndicator';
import { IndicatorPositionStyle } from '../OrderIndicator/OrderIndicator.style';

interface ImageCarouselProps {
  images: string[];
  bottomPadding?: string;
  autoSlideInterval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  bottomPadding = '1.1rem',
  autoSlideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!autoSlideInterval) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoSlideInterval);
    
    return () => clearInterval(interval);
  }, [autoSlideInterval, images.length]);

  // 슬라이드 스타일 계산
  const slideStyle = {
    transform: `translateX(-${currentIndex * 100}%)`,
    width: `${images.length * 100}%`,
  };

  return (
    <div css={CarouselContainer}>
      <div css={ImageContainer} style={slideStyle}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel Image ${index + 1}`}
            css={CarouselImage}
          />
        ))}
      </div>
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