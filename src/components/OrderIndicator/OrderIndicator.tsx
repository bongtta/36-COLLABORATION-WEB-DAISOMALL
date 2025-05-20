/** @jsxImportSource @emotion/react */
import React from 'react';
import { IndicatorContainer, IndicatorItemStyle, Divider } from './OrderIndicator.style';

interface OrderIndicatorProps {
  currentIndex: number;
  totalItems: number;
}

const OrderIndicator = ({
  currentIndex,
  totalItems,
}: OrderIndicatorProps) => (
  <div css={IndicatorContainer}>
    {Array.from({ length: totalItems }).map((_, index) => (
      <React.Fragment key={index}>
        <div css={IndicatorItemStyle(index === currentIndex)}>
          {index + 1}
        </div>
        {index < totalItems - 1 && <div css={Divider}>|</div>}
      </React.Fragment>
    ))}
  </div>
);

export default OrderIndicator;
