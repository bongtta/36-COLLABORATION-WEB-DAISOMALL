import { useQuery } from '@tanstack/react-query';
import { getPopularProducts } from '@apis/search/popular';

export const usePopularProducts = () => 
  useQuery({
    queryKey: ['popularProducts'],
    queryFn: getPopularProducts,
  });