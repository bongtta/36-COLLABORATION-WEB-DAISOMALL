import * as S from './ReviewCarousel.style';

interface ReviewCarouselProps {
  isLoading?: boolean;
  imageUrls?: string[];
}

const MAX_IMAGES_BEFORE_MORE = 6;
const MIN_IMAGES_FOR_MORE_BUTTON = 8;
const SKELETON_COUNT = 7;

const ReviewCarousel = ({ isLoading = false, imageUrls = [] }: ReviewCarouselProps) => {
  if (isLoading) {
    return (
      <S.Container>
        {Array(SKELETON_COUNT)
          .fill(0)
          .map((_, index) => (
            <S.SkeletonImage key={index} />
          ))}
        <S.SkeletonMoreWrapper />
      </S.Container>
    );
  }

  if (imageUrls.length === 0) {
    return <S.EmptyReviewText>리뷰가 없습니다.</S.EmptyReviewText>;
  }

  const showMoreButton = imageUrls.length >= MIN_IMAGES_FOR_MORE_BUTTON;
  const imagesToShow = showMoreButton ? imageUrls.slice(0, MAX_IMAGES_BEFORE_MORE) : imageUrls;

  return (
    <S.Container>
      {imagesToShow.map((src, index) => (
        <S.Image key={index} src={src} alt={`review-${index}`} />
      ))}
      {showMoreButton && (
        <S.MoreWrapper>
          <S.MoreText>더보기</S.MoreText>
        </S.MoreWrapper>
      )}
    </S.Container>
  );
};

export default ReviewCarousel;

