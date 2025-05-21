import * as S from './ReviewCarousel.style';

const placeholder = 'https://placehold.co/58x58';

const ReviewCarousel = () => {
  const images = Array(7).fill(placeholder);

  return (
    <S.Container>
      {images.map((src, index) => (
        <S.Image key={index} src={src} alt={`review-${index}`} />
      ))}
      <S.MoreWrapper>
        <S.MoreText>더보기</S.MoreText>
      </S.MoreWrapper>
    </S.Container>
  );
};

export default ReviewCarousel;

