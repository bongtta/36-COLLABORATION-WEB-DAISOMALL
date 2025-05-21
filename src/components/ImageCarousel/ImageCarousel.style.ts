import { css } from '@emotion/react';

export const CarouselContainer = css`
  position: relative;
  width: 100%;
  overflow: hidden;

  .slick-slider {
    width: 100%;
  }

  .slick-track {
    display: flex;
  }

  .slick-slide {
    height: auto;
  }

  .slick-slide > div {
    height: 100%;
    width: 100%;
  }
`;

export const CarouselImage = css`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;
