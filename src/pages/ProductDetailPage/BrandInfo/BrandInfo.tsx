/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import * as S from './BrandInfo.style';

interface BrandInfoProps {
  brandName?: string;
  brandDescription?: string;
  brandImageUrl?: string;
  isLoading?: boolean;
}

const BrandInfo = ({
  brandName = 'VT',
  brandDescription = '유행을 창조하는 Stylish와 시간에 구애받지 않는 Timeless 효과로 당신의 매일을 함께하는 VT의 스페셜 홈케어! 리들샷의 따끔한 미세자극으로 건강한 피부를 가꿔보세요.',
  brandImageUrl = 'https://placehold.co/70x70',
  isLoading = false
}: BrandInfoProps) => {
  const [imageError, setImageError] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // isLoading prop이 false로 변경될 때 또는 컴포넌트가 마운트될 때 이미지 로딩 상태 초기화
  useEffect(() => {
    if (!isLoading) {
      setIsImageLoaded(false);
    }
  }, [isLoading]);

  const handleImageError = () => {
    console.error('브랜드 이미지 로딩 실패');
    setImageError(true);
    setIsImageLoaded(true);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // 스켈레톤 UI를 보여주는 함수
  const renderSkeleton = () => (
    <div css={S.contentWrapper}>
      <div css={S.skeletonImageContainer} aria-hidden="true" />
      <div css={S.infoContainer}>
        <div css={S.skeletonBrandName} aria-hidden="true" />
        <div css={S.skeletonBrandDescription} aria-hidden="true" />
      </div>
    </div>
  );

  // 실제 콘텐츠를 보여주는 함수
  const renderContent = () => (
    <div css={S.contentWrapper}>
      <figure css={S.imageContainer}>
        <img 
          css={S.brandImage} 
          src={imageError ? 'https://via.placeholder.com/70' : brandImageUrl} 
          alt={`${brandName} 브랜드 이미지`} 
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      </figure>
      <article css={S.infoContainer}>
        <h2 css={S.brandName}>{brandName}</h2>
        <p css={S.brandDescription}>{brandDescription}</p>
      </article>
    </div>
  );

  return (
    <section css={S.container}>
      {isLoading || !isImageLoaded ? renderSkeleton() : renderContent()}
    </section>
  );
};

export default BrandInfo;