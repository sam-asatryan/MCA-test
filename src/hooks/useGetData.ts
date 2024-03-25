import { useQuery } from '@tanstack/react-query';
import { getData } from '../api';

export const useGetData = () => {
  return useQuery({
    queryKey: ['podcasts'],
    queryFn: getData,
    staleTime: 10000,
  });
};
