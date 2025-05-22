/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Header from '@components/Header/Header';
import ImageCarousel from '@components/ImageCarousel/ImageCarousel';
import ProductPageInfo from '../ProductPage/components/ProductPageInfo';
import ReviewCarousel from './ReviewCarousel/ReviewCarousel';
import PickupInfo from './PickupInfo/PickupInfo';
import PerkInfo from './PerkInfo/PerkInfo';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
import NavBar from './NavBar/NavBar';
import BrandInfo from './BrandInfo/BrandInfo';
import AccordionButton from '@components/buttons/accordion/AccordionButton';

const productDetailStyle = css`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
`;

const imageContainerStyle = css`
  width: 100%;
  height: 20rem;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const recommendedProductsStyle = css`
  padding: 3.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const recommendedTitleStyle = css`
  font-size: 1.4rem;
  font-weight: 700;
`;

const productsGridStyle = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
`;

const ProductDetailPage = () => {
  // 예시 데이터
  const productTitle = '다이소 베이직 노트북 파우치 15인치';
  const productPrice = '5,000';
  const productUnitPrice = '5,000';

  const carouselImages = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772'
  ];

  const reviewImages = [
    'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    'https://images.unsplash.com/photo-1560769629-975ec94e6a86',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    'https://images.unsplash.com/photo-1587563871167-1ee9c731aefb',
    'https://images.unsplash.com/photo-1543508282-6319a3e2621f',
    'https://images.unsplash.com/photo-1607522370275-f14206abe5d3'
  ];

  return (
    <div css={productDetailStyle}>
      {/* 1. 헤더 */}
      <Header 
        showBackButton={true} 
        showTitle={true} 
        title={productTitle} 
        showSearchIcon={true} 
        showCartIcon={true} 
        showHomeIcon={true}
      />

      {/* 2. 이미지 캐러셀 */}
      <ImageCarousel images={carouselImages} />

      {/* 3. 상품 정보 */}
      <ProductPageInfo />

      {/* 4. 리뷰 캐러셀 */}
      <ReviewCarousel imageUrls={reviewImages} onMoreClick={() => console.log('리뷰 더보기 클릭')} />

      {/* 5. 픽업 정보 */}
      <PickupInfo />

      {/* 6. 혜택 정보 */}
      <PerkInfo />

      {/* 7. 상품 카드 (수직형) */}
      <div css={recommendedProductsStyle}>
        <h3 css={recommendedTitleStyle}>이런 상품은 어때요?</h3>
        <ProductCardVertical 
          size="128"
          name="다이소 베이직 노트북 파우치 15인치"
          totalPrice="5,000"
          unitPrice="5,000"
          imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          tags={[{ label: '베스트', bg: '#FF5C5C', color: '#FFFFFF' }]}
        />
      </div>

      {/* 8. 이미지 캐러셀 (두번째) */}
      <ImageCarousel 
        images={carouselImages.slice(0, 2)} 
        autoplay={false}
      />

      {/* 9. 네비게이션 바 */}
      <NavBar />

      {/* 10. 브랜드 정보 */}
      <BrandInfo 
        brandName="다이소"
        brandDescription="일상을 다채롭게, 가격은 합리적으로! 다이소의 다양한 상품들을 만나보세요."
        brandImageUrl="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        isLoading={false}
      />

      {/* 11. 이미지 영역 */}
      <div css={imageContainerStyle}>
        <img 
          src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2" 
          alt="상품 상세 이미지"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* 12. 아코디언 */}
      <AccordionButton title="상품 상세 정보">
        <p>
          이 제품은 다양한 용도로 사용할 수 있는 다이소의 베스트셀러 제품입니다.
          내구성이 좋고 실용적인 디자인으로 일상생활에서 유용하게 사용하실 수 있습니다.
          자세한 제품 사양 및 사용법은 제품 패키지를 참고해주세요.
        </p>
      </AccordionButton>

      {/* 13 & 14. 추천 상품 (ProductCardVertical 두 개) */}
      <div css={recommendedProductsStyle}>
        <h3 css={recommendedTitleStyle}>함께 구매하면 좋은 상품</h3>
        <div css={productsGridStyle}>
          <ProductCardVertical 
            size="96"
            name="다이소 미니 멀티탭 1.5m"
            totalPrice="3,000"
            imageUrl="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
            tags={[{ label: '신상', bg: '#5C5CFF', color: '#FFFFFF' }]}
          />
          <ProductCardVertical 
            size="96"
            name="다이소 LED 무드등"
            totalPrice="5,000"
            imageUrl="https://images.unsplash.com/photo-1543508282-6319a3e2621f"
            tags={[{ label: '인기', bg: '#FF5C5C', color: '#FFFFFF' }]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
