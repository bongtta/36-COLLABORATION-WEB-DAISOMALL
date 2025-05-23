import type { ReactNode } from 'react';
import { StarIconWhite } from '@assets/svgs';
import theme from '@styles/theme';

export interface ProductTagData {
  label: string;
  bg: string;
  color: string;
  icon?: ReactNode;
}

export const productTags: ProductTagData[] = [
  { label: 'BEST', bg: theme.colors.primary, color: theme.colors.white },
  {
    label: '추천',
    bg: theme.colors['red-01'],
    color: theme.colors.white,
    icon: <StarIconWhite />,
  },
  { label: '신상', bg: theme.colors['gray-05'], color: theme.colors.primary },
  {
    label: '박스배송',
    bg: theme.colors['gray-05'],
    color: theme.colors.primary,
  },
  {
    label: '최다리뷰상품',
    bg: theme.colors['gray-05'],
    color: theme.colors.primary,
  },
  {
    label: '픽업 가능 매장',
    bg: theme.colors['gray-05'],
    color: theme.colors['gray-03'],
  },
  {
    label: '택배전용',
    bg: theme.colors['gray-05'],
    color: theme.colors['gray-03'],
  },
  {
    label: '픽업전용',
    bg: theme.colors['gray-05'],
    color: theme.colors['gray-03'],
  },
];
