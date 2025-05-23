import Header from '@components/Header/Header';
import ImageCarousel from '@components/ImageCarousel/ImageCarousel';
import ProductPageInfo from '../ProductPage/components/ProductPageInfo';
import ReviewCarousel from './ReviewCarousel/ReviewCarousel';
import PickupInfo from './PickupInfo/PickupInfo';
import PerkInfo from './PerkInfo/PerkInfo';
import ProductCardVertical from '@components/ProductCard/ProductCardVertical/ProductCardVertical';
import NavBar from './NavBar/NavBar';
import BrandInfo from './BrandInfo/BrandInfo';
import ViewMoreButton from '@components/buttons/viewMoreButton/ViewMoreButton';
import SectionTitle from '@components/common/SectionTitle/SectionTitle';
import * as S from './ProductDetailPage.style';
import theme from '@styles/theme';
import Divider from '@components/common/divider/Divider';
import { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomCarousel from './components/Carousel/BottomCarousel';
import Review from './components/Review/Review';
import TodayDiscovery from './components/TodayDiscovery/TodayDiscovery';
import Accordion from './components/Accordion/Accordion';
import BuyBar from './components/BuyBar/BuyBar';
import {
  getProductDetail,
  getReviews,
  getBrandProducts,
  getPopularProducts,
  getCategoryProducts,
} from '@apis/detail/product';
import type {
  GetProductDetailResponseData,
  GetReviewsResponseData,
  GetBrandProductsResponseData,
  GetPopularProductsResponseData,
  GetCategoryProductsResponseData,
} from '@app-types/product';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [productData, setProductData] =
    useState<GetProductDetailResponseData | null>(null);
  const [reviewData, setReviewData] = useState<GetReviewsResponseData | null>(
    null,
  );
  const [brandProductsData, setBrandProductsData] =
    useState<GetBrandProductsResponseData | null>(null);
  const [popularProductsData, setPopularProductsData] =
    useState<GetPopularProductsResponseData | null>(null);
  const [categoryProductsData, setCategoryProductsData] =
    useState<GetCategoryProductsResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isNavBarSticky, setIsNavBarSticky] = useState(false);
  const navBarRef = useRef<HTMLDivElement>(null);

  // 스크롤 대상 섹션들에 대한 ref 추가
  const brandInfoRef = useRef<HTMLDivElement>(null);
  const reviewRef = useRef<HTMLDivElement>(null);
  const buyBarRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      const BRAND_ID_MAP: Record<string, number> = {
        VT: 1,
        비즈: 2,
        락앤락: 3,
      };

      const getBrandIdFromName = (brandName: string): number | undefined =>
        BRAND_ID_MAP[brandName];
      try {
        setIsLoading(true);
        const id = productId ? parseInt(productId) : 1;

        const productResponse = await getProductDetail(id);
        setProductData(productResponse);

        const brandId = getBrandIdFromName(productResponse.brandName); // ← 여기!
        const category = productResponse.category;

        if (!brandId) {
          console.error(
            `브랜드 ID를 찾을 수 없습니다: ${productResponse.brandName}`,
          );
          return;
        }

        const [
          reviewResponse,
          brandProductsResponse,
          popularProductsResponse,
          categoryProductsResponse,
        ] = await Promise.all([
          getReviews(id, 0, 20),
          getBrandProducts(brandId, 0, 10),
          getPopularProducts(),
          getCategoryProducts(category, 0, 20),
        ]);

        setReviewData(reviewResponse);
        setBrandProductsData(brandProductsResponse);
        setPopularProductsData(popularProductsResponse);
        setCategoryProductsData(categoryProductsResponse);
      } catch (error) {
        console.error('API 호출 실패:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [productId]);

  const handleExpandImage = () => {
    setIsImageExpanded(true);
  };

  const HEADER_HEIGHT_PX = 48;
  const [activeTab, setActiveTab] = useState(1);
  const SCROLL_MARGIN = 20; // 여유 마진 추가

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const navBarHeight = navBarRef.current?.offsetHeight ?? 0;
          const offset = navBarHeight + HEADER_HEIGHT_PX;

          const navBarTop =
            navBarRef.current?.getBoundingClientRect().top ?? 9999;
          setIsNavBarSticky(navBarTop <= HEADER_HEIGHT_PX);

          const brandTop = brandInfoRef.current?.offsetTop ?? 0;
          const reviewTop = reviewRef.current?.offsetTop ?? 0;
          const accordionTop = accordionRef.current?.offsetTop ?? 0;

          const currentScroll = scrollY + offset + SCROLL_MARGIN;

          if (currentScroll >= accordionTop) {
            if (activeTab !== 3) setActiveTab(3);
          } else if (currentScroll >= reviewTop) {
            if (activeTab !== 2) setActiveTab(2);
          } else if (currentScroll >= brandTop) {
            if (activeTab !== 1) setActiveTab(1);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // 네비게이션 바 클릭 핸들러 추가
  const handleNavTabClick = (tabId: number) => {
    const navBarHeight = navBarRef.current?.offsetHeight || 0;
    const totalOffset = navBarHeight + HEADER_HEIGHT_PX;

    switch (tabId) {
      case 1: // 상품설명 -> 브랜드 정보로 스크롤
        if (brandInfoRef.current) {
          const targetPosition = brandInfoRef.current.offsetTop - totalOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
        break;
      case 2: // 리뷰 -> 리뷰 컴포넌트로 스크롤
        if (reviewRef.current) {
          const targetPosition = reviewRef.current.offsetTop - totalOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
        break;
      case 3: // 상품정보 → Accordion으로 스크롤
        if (accordionRef.current) {
          const targetPosition = accordionRef.current.offsetTop - totalOffset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth',
          });
        }
        break;
    }
  };

  // 로딩 중일 때 표시 (모든 Hook 호출 후)
  if (isLoading) {
    return;
  }

  // API에서 받아온 데이터만 사용 (더미 데이터 제거)
  const productTitle = productData?.productName || '';

  // API 응답 구조에 정확히 맞춘 이미지 처리
  console.log('전체 productData:', productData);
  console.log('productImages 전체:', productData?.productImages);
  console.log('main 배열:', productData?.productImages?.main);
  console.log('detail 배열:', productData?.productImages?.detail);

  // Main 이미지들 (2번 캐러셀용)
  const mainImages =
    productData?.productImages?.main
      ?.map((img) => img.imageUrl)
      .filter(Boolean) || [];

  // Detail 이미지들 (11번 상세 이미지용)
  const detailImages =
    productData?.productImages?.detail
      ?.map((img) => img.imageUrl)
      .filter(Boolean) || [];

  // 리뷰 이미지 수집 및 처리
  const reviewImages =
    reviewData?.reviews?.flatMap(
      (review) =>
        review.images?.map((img) => img.imageUrl).filter(Boolean) || [],
    ) || [];

  console.log('처리된 이미지 배열:', {
    'main 이미지들 (2번 캐러셀용)': mainImages,
    'main 이미지 개수': mainImages.length,
    'detail 이미지들 (11번 상세용)': detailImages,
    'detail 이미지 개수': detailImages.length,
    '리뷰 이미지들 (4번 캐러셀용)': reviewImages,
    '리뷰 이미지 개수': reviewImages.length,
    '전체 리뷰 개수': reviewData?.reviews?.length || 0,
  });

  // Header 버튼 핸들러
  const handleBackClick = () => {
    const idToUse = productId ? Number(productId) : productData?.productId;
    if (idToUse) {
      navigate('/store-list', { state: { productId: idToUse } });
    } else {
      alert('상세페이지에서 상품 ID를 찾을 수 없습니다!');
      navigate('/store-list');
    }
  };
  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div css={S.productDetailStyle}>
      {/* 1. 헤더 */}
      <Header
        showBackButton={true}
        showTitle={true}
        title={productTitle}
        showSearchIcon={true}
        showCartIcon={true}
        showHomeIcon={true}
        onBackClick={handleBackClick}
        onHomeClick={handleHomeClick}
      />

      {/* 2. 이미지 캐러셀 - API productImages.main 배열 사용 */}
      <ImageCarousel
        images={mainImages}
        height="50rem"
        showSnsHotBadge={true}
      />

      {/* 3. 상품 정보 */}
      <ProductPageInfo
        brandName={productData?.brandName}
        productName={productData?.productName}
        price={productData?.price}
        ratingAvg={productData?.ratingAvg}
        reviewCount={productData?.reviewCount}
      />

      {/* 4. 리뷰 캐러셀 - API 리뷰 이미지들 사용 */}
      <ReviewCarousel
        isLoading={isLoading}
        imageUrls={reviewImages}
        onMoreClick={() => console.log('리뷰 더보기 클릭')}
      />

      <Divider />

      {/* 5. 픽업 정보 */}
      <PickupInfo />

      <Divider />

      {/* 6. 혜택 정보 */}
      <PerkInfo />

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 7. 상품 카드 (수직형) - 인기 상품 API 데이터 사용 */}
      {popularProductsData?.pages && popularProductsData.pages.length > 0 && (
        <div css={S.recommendedProductsStyle}>
          <SectionTitle
            title1="다른 고객이 함께 본 상품"
            onClickAll={() =>
              console.log('다른 고객이 함께 본 상품 전체보기 클릭')
            }
          />
          <div css={S.productsHorizontalStyle}>
            {popularProductsData.pages[0]
              ?.slice(0, 5)
              .map((product) => (
                <ProductCardVertical
                  key={product.productId}
                  id={product.productId}
                  size="96"
                  name={product.productName}
                  totalPrice={product.price.toLocaleString()}
                  imageUrl={product.mainImage}
                  tags={[{ label: '인기', bg: '#FF5C5C', color: '#FFFFFF' }]}
                />
              ))}
            {popularProductsData.pages[1]
              ?.slice(0, 3)
              .map((product) => (
                <ProductCardVertical
                  key={product.productId}
                  id={product.productId}
                  size="96"
                  name={product.productName}
                  totalPrice={product.price.toLocaleString()}
                  imageUrl={product.mainImage}
                  tags={[{ label: '인기', bg: '#FF5C5C', color: '#FFFFFF' }]}
                />
              ))}
          </div>
        </div>
      )}

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 8. 이미지 캐러셀 (두번째) */}
      <BottomCarousel />

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 9. 네비게이션 바 */}
      {isNavBarSticky && (
        <div css={S.stickyNavBarStyle}>
          <NavBar
            onTabClick={handleNavTabClick}
            reviewCount={reviewData?.reviews?.length}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      )}
      <div ref={navBarRef}>
        <NavBar
          onTabClick={handleNavTabClick}
          reviewCount={reviewData?.reviews?.length}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <Divider />

      {/* 10. 브랜드 정보 */}
      <div ref={brandInfoRef}>
        <BrandInfo
          brandName="VT"
          brandDescription="유행을 창조하는 Stylish와 시간에 구애받지 않는 Timeless 효과로 당신의 매일을 함께하는 VT의 스페셜 홈케어! 리들샷의 따끔한 미세자극으로 건강한 피부를 가꿔보세요."
          brandImageUrl="/VT.png"
        />
      </div>

      {/* 11. 이미지 영역 - API productImages.detail 배열의 첫 번째 이미지 사용 */}
      {detailImages.length > 0 && (
        <div
          css={[
            S.imageContainerStyle,
            isImageExpanded ? S.expandedImageStyle : S.collapsedImageStyle,
          ]}
        >
          <div
            style={{
              width: '100%',
              height: isImageExpanded ? 'auto' : '138.2rem',
              overflow: 'hidden',
            }}
          >
            <img
              src={detailImages[0]}
              alt="상품 상세 이미지"
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>

          {/* 12. 네비게이션 버튼 */}
          {!isImageExpanded && (
            <div css={S.viewMoreButtonWrapper}>
              <ViewMoreButton
                buttonText="상세설명 더보기"
                onExpand={handleExpandImage}
              >
                <div>상품 상세 정보 내용</div>
              </ViewMoreButton>
            </div>
          )}
        </div>
      )}

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 13 추천 상품 - 브랜드별 상품 API 데이터 사용 */}
      {brandProductsData?.products && brandProductsData.products.length > 0 && (
        <div css={S.recommendedProductsStyle}>
          <SectionTitle
            title1="VT"
            title2="브랜드 상품 모아보기"
            title1Color={theme.colors['gray-03']}
            onClickAll={() => console.log('브랜드 상품 모아보기 클릭')}
            image={
              <img
                src="/VT.png"
                alt="VT 브랜드"
                style={{
                  width: '3.2rem',
                  height: '3.2rem',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            }
          />
          <div css={S.productsHorizontalStyle}>
            {brandProductsData.products.slice(0, 5).map((product, index) => {
              // 다양한 임시 이미지 URL 배열
              const tempImages = [
                '/brand1.png',
                '/brand2.png',
                '/brand3.png',
                '/brand4.png',
                '/brand5.png',
              ];

              return (
                <ProductCardVertical
                  key={product.productId}
                  id={product.productId}
                  size="96"
                  name={product.productName}
                  totalPrice={product.price.toLocaleString()}
                  imageUrl={tempImages[index % tempImages.length]}
                  tags={product.tags.map((tag) => ({
                    label: tag,
                    bg: theme.colors['gray-05'],
                    color: theme.colors['primary'],
                  }))}
                />
              );
            })}
          </div>
        </div>
      )}

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 14. 관련 상품 추천 */}
      {categoryProductsData?.products &&
        categoryProductsData.products.length > 0 && (
          <div css={S.recommendedProductsStyle}>
            <SectionTitle
              title1="이런 기초스킨케어 상품은 어때요?"
              onClickAll={() =>
                console.log('이런 기초스킨케어 상품은 어때요? 전체보기 클릭')
              }
            />
            <div css={S.productsHorizontalStyle}>
              {categoryProductsData.products.slice(0, 5).map((product) => (
                <ProductCardVertical
                  key={product.productId}
                  id={product.productId}
                  size="96"
                  name={product.productName}
                  totalPrice={product.price.toLocaleString()}
                  imageUrl={product.mainImage}
                  tags={product.tags.map((tag) => ({
                    label: tag,
                    bg: theme.colors['primary'],
                    color: theme.colors['gray-05'],
                  }))}
                />
              ))}
            </div>
          </div>
        )}

      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 15. 오늘의 발견 */}
      <TodayDiscovery />
      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 16. 하단 캐러셀 */}
      <BottomCarousel />
      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 17. 리뷰 */}
      <div ref={reviewRef}>
        <Review
          reviewData={reviewData}
          productData={productData}
          reviewImages={reviewImages}
        />
      </div>
      <Divider height="8px" color={theme.colors['gray-06']} />

      {/* 18. 기타 정보 */}
      <div ref={accordionRef}>
        <Accordion />
      </div>
      <div ref={buyBarRef}>
        <BuyBar />
      </div>
    </div>
  );
};

export default ProductDetailPage;
