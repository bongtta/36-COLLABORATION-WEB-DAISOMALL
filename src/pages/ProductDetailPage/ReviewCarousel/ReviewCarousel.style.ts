import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.6rem;
  overflow-x: auto;
  padding-bottom: 3.2rem;
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
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://placehold.co/58x58');
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
