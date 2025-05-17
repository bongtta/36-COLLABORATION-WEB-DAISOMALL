import * as S from './ProductTag.style';
import type { ReactNode } from 'react';

export interface ProductTagProps {
  label: string;
  bg: string;
  color: string;
  icon?: ReactNode;
}

const ProductTag = ({ label, bg, color, icon }: ProductTagProps) => {
  return (
    <div css={S.Tag(bg, color, Boolean(icon))}>
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default ProductTag;