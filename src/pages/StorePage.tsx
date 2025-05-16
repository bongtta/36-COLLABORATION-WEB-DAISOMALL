import { useParams } from 'react-router-dom';

const StorePage = () => {
  const { id } = useParams();
  
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>매장 찾기 페이지</h1>
      <p>제품 ID: {id}</p>
      <p>이 페이지에서는 제품 {id}를 구매할 수 있는 매장을 찾을 수 있습니다.</p>
    </div>
  );
};

export default StorePage;