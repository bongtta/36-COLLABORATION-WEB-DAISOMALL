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
    <div css={IndicatorItemStyle(true)}>
      {currentIndex + 1}
    </div>
    <div css={Divider}>|</div>
    <div css={IndicatorItemStyle(false)}>
      {totalItems}
    </div>
  </div>
);

export default OrderIndicator;
