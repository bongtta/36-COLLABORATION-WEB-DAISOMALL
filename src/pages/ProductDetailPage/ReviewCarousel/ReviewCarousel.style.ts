import styled from '@emotion/styled';
import theme from '@styles/theme';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
  overflow-x: auto;
`;

export const Image = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 4px;
  flex-shrink: 0;
`;

export const MoreWrapper = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 4px;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://placehold.co/58x58');
  background-size: cover;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const MoreText = styled.div`
  color: ${theme.colors.white};
  font-family: ${theme.fonts['body-12R'].fontFamily};
  font-weight: ${theme.fonts['body-12R'].fontWeight};
  font-size: ${theme.fonts['body-12R'].fontSize};
  line-height: ${theme.fonts['body-12R'].lineHeight};
  word-wrap: break-word;
`;
