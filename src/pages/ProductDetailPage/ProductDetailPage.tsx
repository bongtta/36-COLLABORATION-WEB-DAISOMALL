import { useState, useEffect } from 'react';
import ReviewCarousel from './ReviewCarousel/ReviewCarousel';

const ProductDetailPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dummyImageUrls = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1초 후 로딩 상태 변경

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 제거
  }, []);

  return (
    <div>
      <ReviewCarousel isLoading={isLoading} imageUrls={dummyImageUrls} />
    </div>
  );
};

export default ProductDetailPage;
