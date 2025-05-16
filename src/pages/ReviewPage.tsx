import { useParams } from 'react-router-dom';

const ReviewPage = () => {
  const { id } = useParams();
  
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>고객 리뷰 페이지</h1>
      <p>제품 ID: {id}</p>
      <p>이 페이지에서는 제품 {id}에 대한 모든 리뷰를 볼 수 있습니다.</p>
    </div>
  );
};

export default ReviewPage;