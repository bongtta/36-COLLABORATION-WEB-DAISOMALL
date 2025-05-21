import styled from '@emotion/styled';
import theme from '@styles/theme';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  overflow-x: auto;
  padding-bottom: 3.2rem;

  /* 스크롤바 숨기기 */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Edge */
  }
`;

export const Image = styled.img`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const MoreWrapper = styled.div`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 4px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%);
  background-size: cover;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const MoreText = styled.div`
  color: ${theme.colors.white};
  ${theme.fonts['body-12R']}
  word-wrap: break-word;
`;

const pulse = keyframes`
  0% {
    background-color: ${theme.colors['gray-05']};
  }
  50% {
    background-color: ${theme.colors['gray-04']};
  }
  100% {
    background-color: ${theme.colors['gray-05']};
  }
`;

const SkeletonBase = styled.div`
  width: 5.8rem;
  height: 5.8rem;
  border-radius: 4px;
  flex-shrink: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
`;

export const SkeletonImage = styled(SkeletonBase)``;

export const SkeletonMoreWrapper = styled(SkeletonBase)``;

export const EmptyReviewText = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
  ${theme.fonts['body-14M']};
  color: ${theme.colors['gray-03']};
`;
