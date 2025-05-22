/** @jsxImportSource @emotion/react */
import * as S from './BrandInfo.style';

interface BrandInfoProps {
  brandName?: string;
  brandDescription?: string;
  brandImageUrl?: string;
}

const BrandInfo = ({
  brandName = 'VT',
  brandDescription = '유행을 창조하는 Stylish와 시간에 구애받지 않는 Timeless 효과로 당신의 매일을 함께하는 VT의 스페셜 홈케어! 리들샷의 따끔한 미세자극으로 건강한 피부를 가꿔보세요.',
  brandImageUrl = 'https://placehold.co/70x70'
}: BrandInfoProps) => {
  return (
    <section css={S.container}>
      <div css={S.contentWrapper}>
        <figure css={S.imageContainer}>
          <img css={S.brandImage} src={brandImageUrl} alt={`${brandName} 브랜드 이미지`} />
        </figure>
        <article css={S.infoContainer}>
          <h2 css={S.brandName}>{brandName}</h2>
          <p css={S.brandDescription}>{brandDescription}</p>
        </article>
      </div>
    </section>
  );
};

export default BrandInfo;