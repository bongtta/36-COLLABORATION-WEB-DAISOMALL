import { css } from '@emotion/react';

export const CarouselContainer = css`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

export const ImageContainer = css`
  width: 100%;
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

export const CarouselImage = css`
  width: 100%;
  height: auto;
  display: block;
  flex-shrink: 0;
`;