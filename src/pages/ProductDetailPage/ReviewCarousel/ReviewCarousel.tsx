import * as S from './ReviewCarousel.style';

interface ReviewCarouselProps {
  isLoading?: boolean;
  imageUrls?: string[];
}

const ReviewCarousel = ({ isLoading = false, imageUrls = [] }: ReviewCarouselProps) => {
  if (isLoading) {
    return (
      <S.Container>
        {Array(7)
          .fill(0)
          .map((_, index) => (
            <S.SkeletonImage key={index} />
          ))}
        <S.SkeletonMoreWrapper />
      </S.Container>
    );
  }

  return (
    <S.Container>
      {imageUrls.map((src, index) => (
        <S.Image key={index} src={src} alt={`review-${index}`} />
      ))}
      <S.MoreWrapper>
        <S.MoreText>더보기</S.MoreText>
      </S.MoreWrapper>
    </S.Container>
  );
};

export default ReviewCarousel;

