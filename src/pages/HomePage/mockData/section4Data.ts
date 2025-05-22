import theme from '@styles/theme';

import sectionImg1 from '/home-section-16.png';
import sectionImg2 from '/home-section-17.png';
import sectionImg3 from '/home-section-18.png';
import sectionImg4 from '/home-section-19.png';
import sectionImg5 from '/home-section-20.png';

import type { ProductTagData } from '@components/Tag/tagData';

interface ProductCardVerticalProps {
  id: number;
  size: '96' | '128';
  name: string;
  totalPrice: string;
  unitPrice?: string;
  imageUrl?: string;
  tags?: ProductTagData[];
  quantityText?: string;
  isSnsHot?: boolean;
  isBoxDelivery?: boolean;
}

export const FOURTH_PRODUCTS: ProductCardVerticalProps[] = [
  {
    id: 1,
    size: '96',
    imageUrl: sectionImg1,
    name: '랭킹용 앰플',
    totalPrice: '3,000',
    tags: [
      { label: 'BEST', bg: theme.colors.primary, color: theme.colors.white },
    ],
  },
  {
    id: 2,
    size: '96',
    imageUrl: sectionImg2,
    name: '랭킹용 앰플',
    totalPrice: '3,000',
  },
  {
    id: 3,
    size: '96',
    imageUrl: sectionImg3,
    name: '랭킹용 앰플',
    totalPrice: '3,000',
    tags: [
      { label: 'BEST', bg: theme.colors.primary, color: theme.colors.white },
      {
        label: '신상',
        bg: theme.colors['gray-05'],
        color: theme.colors.primary,
      },
    ],
  },
  {
    id: 4,
    size: '96',
    imageUrl: sectionImg4,
    name: '랭킹용 앰플',
    totalPrice: '3,000',
    tags: [
      {
        label: '신상',
        bg: theme.colors['gray-05'],
        color: theme.colors.primary,
      },
    ],
  },
  {
    id: 5,
    size: '96',
    imageUrl: sectionImg5,
    name: '랭킹용 앰플',
    totalPrice: '3,000',
    tags: [
      { label: 'BEST', bg: theme.colors.primary, color: theme.colors.white },
      {
        label: '신상',
        bg: theme.colors['gray-05'],
        color: theme.colors.primary,
      },
    ],
  },
];
