/** @jsxImportSource @emotion/react */
import * as S from './Rating.style';
import { StarIcon } from '@assets/svgs';

const Rating = () => {
  return (
    <div css={S.Rating}>
      <div css={S.RatingIconWrapper}>
        <StarIcon />
      </div>
      <span css={S.RatingText}>4.8점</span>
      <span css={S.ReviewCount}>(1.1만)</span>
    </div>
  );
};

export default Rating; 